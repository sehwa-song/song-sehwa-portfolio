(() => {
    const media = window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
    const cards = [...document.querySelectorAll('#projects .card[title$="A2A Agent Company"], #projects .card[title$="TripPups"]')];
    let frame = 0;
    let previousTime = 0;
    const states = cards.map(card => {
        const region = card.parentElement;
        region.classList.add('project-tilt-region');
        card.classList.add('project-tilt');
        return { card, region, x: 0, y: 0, lightX: 50, lightY: 50, targetX: 0, targetY: 0, targetLightX: 50, targetLightY: 50 };
    });

    function render(time) {
        const delta = previousTime ? Math.min(time - previousTime, 50) : 16;
        const blend = 1 - Math.exp(-delta / 65);
        previousTime = time;
        let moving = false;
        for (const state of states) {
            for (const [key, target] of [['x', 'targetX'], ['y', 'targetY'], ['lightX', 'targetLightX'], ['lightY', 'targetLightY']]) {
                state[key] += (state[target] - state[key]) * blend;
                if (Math.abs(state[target] - state[key]) < 0.01) state[key] = state[target];
                else moving = true;
            }
            state.card.style.setProperty('--tilt-x', `${state.x.toFixed(3)}deg`);
            state.card.style.setProperty('--tilt-y', `${state.y.toFixed(3)}deg`);
            state.card.style.setProperty('--tilt-light-x', `${state.lightX.toFixed(2)}%`);
            state.card.style.setProperty('--tilt-light-y', `${state.lightY.toFixed(2)}%`);
        }
        frame = moving ? requestAnimationFrame(render) : 0;
        if (!moving) previousTime = 0;
    }

    function schedule() {
        if (!frame) frame = requestAnimationFrame(render);
    }

    function reset(state) {
        state.targetX = state.targetY = 0;
        state.targetLightX = state.targetLightY = 50;
        state.card.classList.remove('is-tilting');
        schedule();
    }

    for (const state of states) {
        state.region.addEventListener('pointermove', event => {
            if (!media.matches || event.pointerType !== 'mouse') return;
            // Measure the stationary parent, not the transformed card, to avoid feedback jitter.
            const bounds = state.region.getBoundingClientRect();
            const x = Math.max(0, Math.min(1, (event.clientX - bounds.left - state.card.offsetLeft) / state.card.offsetWidth));
            const y = Math.max(0, Math.min(1, (event.clientY - bounds.top - state.card.offsetTop) / state.card.offsetHeight));
            state.targetX = (0.5 - y) * 8;
            state.targetY = (x - 0.5) * 8;
            const magnitude = Math.hypot(state.targetX, state.targetY);
            if (magnitude > 4) {
                state.targetX *= 4 / magnitude;
                state.targetY *= 4 / magnitude;
            }
            state.targetLightX = x * 100;
            state.targetLightY = y * 100;
            state.card.classList.add('is-tilting');
            schedule();
        }, { passive: true });
        state.region.addEventListener('pointerleave', () => reset(state));
        state.region.addEventListener('pointercancel', () => reset(state));
    }

    function stop() {
        cancelAnimationFrame(frame);
        frame = previousTime = 0;
        for (const state of states) {
            state.x = state.y = state.targetX = state.targetY = 0;
            state.lightX = state.lightY = state.targetLightX = state.targetLightY = 50;
            state.card.classList.remove('is-tilting');
            for (const property of ['--tilt-x', '--tilt-y', '--tilt-light-x', '--tilt-light-y']) state.card.style.removeProperty(property);
        }
    }

    media.addEventListener('change', stop);
    window.addEventListener('blur', () => states.forEach(reset));
    window.addEventListener('scroll', () => {
        for (const state of states) if (state.card.classList.contains('is-tilting')) reset(state);
    }, { passive: true });
    document.addEventListener('visibilitychange', () => { if (document.hidden) stop(); });
})();
