---
title: "A2A Agent Company"
description: "전북대학교 산학협력 캡스톤 프로젝트 A2A Agent Company의 웹 애플리케이션 및 데모 개발과 구현·테스트 경험을 소개합니다."
type: "page"
layout: "about"
url: "/projects/a2a-agent-company/"
draft: false
---

<div class="a2a-detail">

## 활동 시기와 진행 상태

<div class="a2a-grid a2a-meta">
<div class="a2a-panel"><span class="a2a-label">프로젝트 유형</span><strong>전북대학교 산학협력 캡스톤</strong><span class="a2a-note">2026년 2학기</span></div>
<div class="a2a-panel"><span class="a2a-label">시작일</span><strong><time datetime="2026-09-04">2026.09.04</time></strong></div>
<div class="a2a-panel"><span class="a2a-label">진행 상태</span><strong class="a2a-accent">개발 진행 중</strong></div>
</div>

## 프로젝트 목적

<p class="a2a-statement">다중 AI 에이전트가 협업하는<br>가상 소프트웨어 회사.</p>

A2A 기반 다중 AI 에이전트 협업형 가상 소프트웨어 회사 개발을 목표로 합니다. 웹 애플리케이션을 통해 에이전트 협업 과정과 실행 결과를 확인하는 데모를 구현하고자 합니다.

## 담당 역할과 기여 범위

웹 애플리케이션 및 데모 개발을 담당하며, 프론트엔드·백엔드·데이터베이스·인증을 연결하는 작업에 참여하고 있습니다.

<div class="a2a-grid a2a-roles">
<div class="a2a-panel">
<h3>프론트엔드</h3>
<p class="a2a-accent">React · Vite</p>
<p>웹 애플리케이션 및 데모 화면 개발</p>
</div>
<div class="a2a-panel">
<h3>백엔드</h3>
<p class="a2a-accent">FastAPI</p>
<p>회원가입·로그인 및 전자문서 API 구현</p>
</div>
<div class="a2a-panel">
<h3>데이터베이스·인증</h3>
<p class="a2a-accent">SQLite · JWT</p>
<p>회원 정보 관리 데이터베이스와 로그인·보호 API 인증 구현</p>
</div>
</div>

전자문서 기능은 로그인 기반 파일 업로드와 목록 조회·다운로드를 담당했습니다.

## 기술 스택

<ul class="a2a-badges" aria-label="프로젝트 사용 기술">
<li>React</li><li>Vite</li><li>FastAPI</li><li>SQLite</li><li>JWT</li>
</ul>

## 웹서비스 이용 흐름

구현한 회원·인증·전자문서 기능을 사용자 동작과 백엔드 처리로 구분했습니다. 보호 API는 발급받은 JWT 토큰을 적용해 정상 호출을 확인했습니다.

<ol class="a2a-grid a2a-flow">
<li class="a2a-panel">
<span class="a2a-step" aria-hidden="true">01 →</span>
<h3>회원가입</h3>
<dl><dt>사용자 동작</dt><dd>이메일과 비밀번호를 입력하고 회원가입 요청</dd><dt>백엔드 처리</dt><dd>이메일 형식·비밀번호 길이·이메일 중복 여부를 확인하고 회원 정보 등록</dd></dl>
</li>
<li class="a2a-panel">
<span class="a2a-step" aria-hidden="true">02 →</span>
<h3>로그인</h3>
<dl><dt>사용자 동작</dt><dd>가입한 이메일과 비밀번호로 로그인 요청</dd><dt>백엔드 처리</dt><dd>사용자 인증 후 JWT 토큰 발급</dd></dl>
</li>
<li class="a2a-panel">
<span class="a2a-step" aria-hidden="true">03 →</span>
<h3>JWT 인증</h3>
<dl><dt>사용자 동작</dt><dd>발급받은 JWT 토큰을 이용해 보호 API 호출</dd><dt>백엔드 처리</dt><dd>JWT 토큰을 확인하고 인증된 요청 처리</dd></dl>
</li>
<li class="a2a-panel">
<span class="a2a-step" aria-hidden="true">04 →</span>
<h3>전자문서 업로드</h3>
<dl><dt>사용자 동작</dt><dd>로그인 상태에서 파일을 선택해 업로드 요청</dd><dt>백엔드 처리</dt><dd>인증된 사용자의 파일 업로드 처리</dd></dl>
</li>
<li class="a2a-panel">
<span class="a2a-step" aria-hidden="true">05</span>
<h3>조회·다운로드</h3>
<dl><dt>사용자 동작</dt><dd>업로드된 문서 목록을 조회하고 문서를 선택해 다운로드</dd><dt>백엔드 처리</dt><dd>문서 목록 반환 및 요청한 파일의 다운로드 응답 제공</dd></dl>
</li>
</ol>

## 수행 과정과 문제 해결

1. **실행 환경 구축:** React·Vite 프론트엔드와 FastAPI 백엔드의 실행 환경을 구축했습니다.
2. **회원 기능과 인증 구현:** 회원가입·로그인과 JWT 인증을 구현했습니다. 이메일 형식과 비밀번호 길이를 검증하고, 중복 이메일 회원가입을 방지하도록 처리했습니다.
3. **API 동작 검증:** FastAPI Swagger UI에서 API 요청과 응답을 확인하고, 발급받은 JWT 토큰으로 보호 API를 호출했습니다.
4. **전자문서 기능 구현:** 로그인 기반 파일 업로드와 전자문서 목록 조회·다운로드 기능을 구현했습니다.

### HTTP 401 인증 오류 해결

<ol class="a2a-grid a2a-troubleshooting">
<li class="a2a-panel"><span class="a2a-step">01 · 오류 발생</span><h4>HTTP 401</h4><p>보호 API 호출 중 인증 오류가 발생했습니다.</p></li>
<li class="a2a-panel"><span class="a2a-step">02 · 원인 확인</span><h4>응답과 인증 설정 점검</h4><p>API 응답, JWT 토큰 발급 상태와 Swagger UI의 Authorize 설정을 확인했습니다.</p></li>
<li class="a2a-panel"><span class="a2a-step">03 · JWT 인증 설정 수정</span><h4>올바른 토큰 적용</h4><p>Swagger UI의 Authorize에 올바른 JWT 토큰을 적용했습니다.</p></li>
<li class="a2a-panel"><span class="a2a-step">04 · 결과 확인</span><h4>보호 API 정상 호출</h4><p>토큰 적용 후 보호 API의 정상 호출을 확인했습니다.</p></li>
</ol>

## 산출물과 검증 결과

<div class="a2a-results" role="region" aria-label="산출물과 검증 결과 표" tabindex="0">

| 산출물 또는 검증 대상 | 확인한 결과 | 상태 |
| --- | --- | --- |
| 회원가입·로그인 | 회원 정보 관리와 입력값 검증, 중복 이메일 방지 기능 구현 | 구현 완료 |
| JWT 인증 및 보호 API | 토큰 적용 후 보호 API 정상 호출 확인 | 구현 및 호출 검증 완료 |
| 전자문서 기능 | 로그인 기반 업로드, 목록 조회 및 다운로드 기능 구현 | 구현 완료 |
| 웹 애플리케이션 및 데모 | 프론트엔드와 API 구현 결과를 바탕으로 개발 지속 | 개발 진행 중 |
| 에이전트 간 실제 연동 및 전체 E2E 통합 | 완료 여부는 확인되지 않음 | 통합 완료 여부 미확인 |

</div>

## 활동 사진

<aside class="aboutImg text-center">

![A2A Agent Company 캡스톤 프로젝트 활동 사진]({{< relref "/" >}}images/projects/a2a-activity-01.jpeg)

A2A Agent Company 캡스톤 프로젝트 활동 사진

</aside>

## 학습 결과와 개선 방향

프론트엔드·백엔드·데이터베이스·인증이 연결되는 웹서비스 구조를 이해했습니다. HTTP 401 오류를 해결하며 API 응답, 토큰 발급 상태와 요청 시 인증 설정을 함께 점검하는 경험을 쌓았습니다.

향후 에이전트 연동과 E2E 통합 검증을 강화해, 에이전트 협업 과정과 실행 결과가 웹 애플리케이션에 올바르게 연결되는지 확인할 계획입니다.

## GitHub 저장소

[A2A Agent Company GitHub 저장소](https://github.com/jooho-le/A2A-agent-company)

<a class="project-back-link" href="{{< relref "/" >}}#projects"><span aria-hidden="true">←</span><span>프로젝트 목록으로 돌아가기</span></a>

</div>
