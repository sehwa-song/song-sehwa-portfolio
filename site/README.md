# 송세화 개발 포트폴리오

웹서비스 및 AI 기반 서비스 개발 경험을 소개하는 개인 포트폴리오입니다. Hugo Profile 테마를 기반으로 제작한 정적 웹사이트이며, 실제 사이트 소스는 `site/`에 있습니다.

**배포 주소:** [송세화 개발 포트폴리오](https://sehwa-song.github.io/song-sehwa-portfolio/)

## 목차

각 절에는 보고서에서 직접 연결할 수 있는 고정 앵커를 지정했습니다.

- [프로젝트 소개](#project-overview)
- [주요 콘텐츠](#main-content)
- [사용 기술](#tech-stack)
- [프로젝트 구조](#project-structure)
- [설치 및 실행 방법](#installation-and-run)
- [배포 방법](#deployment)
- [디자인 및 참고 자료](#design-references)
- [라이선스 및 출처](#license-and-attribution)

<a id="project-overview"></a>

## 1. 프로젝트 소개

| 항목 | 내용 |
| --- | --- |
| 프로젝트명 | 송세화 개발 포트폴리오 |
| 제작 목적 | 웹서비스 및 AI 기반 서비스 개발 경험 소개 |
| 제작 방식 | Hugo Profile 테마 기반 정적 포트폴리오 |
| 소유자 | 전북대학교 컴퓨터인공지능학부 송세화 |
| 배포 환경 | GitHub Actions · GitHub Pages |
| 공개 사이트 | [sehwa-song.github.io/song-sehwa-portfolio](https://sehwa-song.github.io/song-sehwa-portfolio/) |

프로젝트에서 직접 수행한 역할, 구현 경험, 검증 과정과 향후 개선 방향을 정리합니다. 개발 중인 내용과 구현·검증한 내용을 구분하며, 전체 A2A 에이전트 연동 및 E2E 통합을 완료된 성과로 표현하지 않습니다.

<a id="main-content"></a>

## 2. 주요 콘텐츠

| 영역 | 소개 내용 |
| --- | --- |
| 자기소개 및 관심 분야 | 웹서비스 개발, AI 기반 서비스, 풀스택 개발에 대한 관심과 학습 목표·실행 계획 |
| 학력 및 기술 스택 | 전북대학교 컴퓨터인공지능학부 4학년 재학 정보와 실제 기술 적용 경험 |
| A2A Agent Company | 산학협력 캡스톤 프로젝트의 웹 애플리케이션·데모 개발 경험 |
| TripPups | 강원도 관광 중심의 스와이프형 여행 플랫폼 개발 참여와 모두의 창업 2차 진출 |
| 프로젝트 상세 페이지 | 프로젝트 개요, 역할, 진행 상태, 구현·검증 경험 및 활동 사진 |

프로젝트별 원문과 공개 페이지는 다음과 같습니다.

- **A2A Agent Company:** [상세 문서](content/a2a-agent-company/index.md) · [공개 상세 페이지](https://sehwa-song.github.io/song-sehwa-portfolio/projects/a2a-agent-company/)
- **TripPups:** [상세 문서](content/trippups/index.md) · [공개 상세 페이지](https://sehwa-song.github.io/song-sehwa-portfolio/projects/trippups/)

두 프로젝트 모두 개발 진행 중이며, 확인되지 않은 기능을 완료된 기능으로 소개하지 않습니다.

<a id="tech-stack"></a>

## 3. 사용 기술

### 포트폴리오 사이트 구현 및 운영

| 기술 | 용도 |
| --- | --- |
| Hugo v0.169.0 Extended | 확인된 로컬 개발 환경의 정적 사이트 생성기 |
| HTML · CSS · JavaScript | 테마 템플릿, 사이트 스타일 및 인터랙션 |
| Markdown · YAML | 프로젝트 상세 콘텐츠 및 사이트 설정 |
| Git · GitHub | 소스 버전 관리 및 저장소 운영 |
| GitHub Actions · GitHub Pages | 자동 빌드 및 정적 사이트 배포 |

현재 배포 워크플로는 **Hugo Extended v0.143.0**을 사용합니다. 로컬에서 확인한 버전과 배포 환경의 버전을 구분합니다.

### 소개하는 프로젝트의 기술

**React · Vite · FastAPI · SQLite · JWT**는 A2A Agent Company에서 사용한 기술입니다. 포트폴리오 사이트 자체를 구현한 기술과 구분하며, 해당 프로젝트의 프론트엔드, API, 데이터베이스 및 인증 경험으로 소개합니다.

<a id="project-structure"></a>

## 4. 프로젝트 구조

아래 경로는 저장소 루트 `hugo-profile-master/`를 기준으로 합니다.

| 경로 | 역할 |
| --- | --- |
| `site/README.md` | 포트폴리오 프로젝트 안내 문서 |
| `site/hugo.yaml` | 사이트 정보, 자기소개 및 프로젝트 카드 등 설정 |
| `site/pages.json` | 배포 주소 및 테마 등 병합 설정 |
| `site/content/` | A2A Agent Company와 TripPups 등 Markdown 콘텐츠 |
| `site/static/` | 프로필·프로젝트 이미지, CSS 등 정적 파일 |
| `site/layouts/` | 헤더, 자기소개, 이미지 경로, 404 페이지 등의 테마 오버라이드 |
| `site/themes/template/` | Hugo Profile 원본 테마 |
| `.github/workflows/hugo-pages.yml` | GitHub Pages 자동 배포 워크플로 |
| `.github/pages_build.py` | 배포 빌드 및 하위 경로 처리 스크립트 |
| `exampleSite/` | 원본 예제 사이트 |

실제 포트폴리오는 `site/`를 사용합니다. 원본 테마를 직접 수정하는 대신 사이트의 `layouts/`와 정적 CSS를 활용해 디자인과 경로 처리를 적용합니다.

<a id="installation-and-run"></a>

## 5. 설치 및 실행 방법

저장소를 내려받은 뒤, 다음 명령은 모두 프로젝트 루트 **`hugo-profile-master/`**에서 실행합니다.

### Hugo 설치

macOS의 Homebrew 환경에서 설치합니다. 설치되는 버전은 실행 시점에 따라 달라질 수 있습니다.

```sh
brew install hugo
```

### 버전 확인

```sh
hugo version
```

확인된 로컬 환경은 **Hugo v0.169.0 Extended**입니다.

### 로컬 서버 실행

```sh
hugo server --source site --config hugo.yaml,pages.json --baseURL http://localhost:1314/song-sehwa-portfolio/ --port 1314
```

브라우저에서 [로컬 포트폴리오](http://localhost:1314/song-sehwa-portfolio/)에 접속합니다. 서버 종료는 실행한 터미널에서 `Ctrl+C`를 누릅니다.

### 사이트 빌드

```sh
hugo --source site --config hugo.yaml,pages.json
```

기본 빌드 결과는 `site/public/`에 생성됩니다. 위 명령은 `hugo.yaml`과 `pages.json`을 함께 읽으며, `pages.json`의 배포 주소 설정을 반영합니다. 로컬 서버에서는 명령의 `--baseURL`로 로컬 주소와 하위 경로를 지정합니다.

<a id="deployment"></a>

## 6. 배포 방법

1. 변경 사항을 저장소의 `main` 브랜치에 push하면 GitHub Actions가 실행됩니다.
2. 워크플로가 의존성을 준비하고 Hugo 사이트를 빌드합니다.
3. 빌드 스크립트가 GitHub Pages의 배포 주소와 하위 경로를 처리하고 결과물을 생성합니다.
4. 생성된 결과물을 GitHub Pages에 배포합니다.
5. GitHub 저장소의 **Actions**에서 빌드·배포 성공 여부를 확인하고, [공개 사이트](https://sehwa-song.github.io/song-sehwa-portfolio/)에서 변경 사항과 이미지·내부 링크를 확인합니다.

관련 파일은 [배포 워크플로](../.github/workflows/hugo-pages.yml)와 [빌드 스크립트](../.github/pages_build.py)입니다. 워크플로는 수동 실행도 지원하며, 배포 빌드 결과는 저장소 루트의 `public/`에 생성됩니다.

공개 사이트는 `/song-sehwa-portfolio/` 하위 경로를 사용합니다. 로컬 실행과 배포 결과를 확인할 때 메인 화면뿐 아니라 두 프로젝트 상세 페이지와 이미지 경로도 함께 확인합니다.

<a id="design-references"></a>

## 7. 디자인 및 참고 자료

| 자료 | 활용 방식 |
| --- | --- |
| [Hugo Profile](https://github.com/gurusabarish/hugo-profile) | 정적 포트폴리오의 기본 테마와 레이아웃 |
| [Perry Wang 포트폴리오](https://www.perryw.ca/) | 미니멀한 다크 UI와 타이포그래피의 디자인 참고 |

Hugo Profile의 기본 구조를 활용하면서 시스템 산세리프 글꼴, 은은한 Hero 그라데이션, 자기소개 구성, 미니멀한 헤더 브랜드 등을 개인 포트폴리오에 맞게 조정했습니다.

Perry Wang 포트폴리오의 미니멀한 다크 UI와 타이포그래피 분위기를 참고하되, 실제 구성과 표현은 개인 개발자 포트폴리오에 맞게 독자적으로 각색했습니다.

<a id="license-and-attribution"></a>

## 8. 라이선스 및 출처

### Hugo Profile 테마

- 원본: [gurusabarish/hugo-profile](https://github.com/gurusabarish/hugo-profile)
- 확인한 라이선스: **MIT License**
- 저작권 표시: **Copyright (c) 2021 GURU SABARISH**
- 라이선스 원문: [테마 LICENSE](themes/template/LICENSE)

테마를 복제하거나 상당 부분을 포함해 배포할 때는 원본 라이선스에 명시된 저작권 및 허가 고지를 유지합니다. 기존 테마의 출처와 라이선스 파일을 보존합니다.

### 직접 작성한 콘텐츠와 사진

자기소개, 프로젝트 경험 및 상세 설명은 송세화의 실제 활동을 정리한 개인 콘텐츠입니다. 제공된 실제 프로필 사진과 프로젝트 활동 사진은 개인 활동 자료로 구분합니다. 직접 촬영하거나 사용 권한을 가진 사진은 개인 콘텐츠로 관리하며, 개별 사진의 촬영자나 별도 이용 조건은 확인 없이 추가하지 않습니다.

외부 테마의 MIT 라이선스를 개인 소개 글이나 사진 전체의 이용 허가로 간주하지 않습니다.

### 기타 포함 자료

`site/LICENSE`에는 Apache License 2.0 문서가 남아 있습니다. 이는 위에서 확인한 Hugo Profile 테마의 MIT 라이선스와 별개의 파일이며, 이 문서만을 근거로 모든 콘텐츠의 라이선스를 동일하게 지정하지 않습니다.

외부 테마·참고 자료와 직접 작성한 콘텐츠를 구분하고, 개별 자료의 확인되지 않은 이미지 출처나 라이선스 조건은 임의로 기재하지 않습니다.
