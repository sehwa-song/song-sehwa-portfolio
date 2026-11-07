---
title: "A2A Agent Company"
description: "전북대학교 산학협력 캡스톤 프로젝트 A2A Agent Company의 웹 애플리케이션 및 데모 개발과 구현·테스트 경험을 소개합니다."
type: "page"
layout: "about"
url: "/projects/a2a-agent-company/"
draft: false
---

## 프로젝트 개요

A2A Agent Company는 전북대학교 산학협력 캡스톤 프로젝트입니다. A2A 기반 다중 AI 에이전트가 협업하는 가상 소프트웨어 회사 개발을 목표로 합니다.

## 담당 역할

웹 애플리케이션 및 데모 개발을 담당하고 있습니다.

- React·Vite를 활용한 프론트엔드 개발
- FastAPI를 활용한 백엔드 개발
- API·데이터베이스·인증 연동

## 기술 스택

| 구분 | 사용 기술 |
| --- | --- |
| 프론트엔드 | React, Vite |
| 백엔드 | FastAPI |
| 데이터베이스 | SQLite |
| 인증 | JWT |

## 주요 구현 기능

### 회원가입 및 로그인

FastAPI와 SQLite를 기반으로 회원 정보를 관리하고, JWT 기반 로그인과 인증을 구현했습니다.

- 회원가입 시 이메일 형식 및 비밀번호 길이 검증
- 중복 이메일을 사용하는 회원가입 방지
- JWT 기반 로그인 및 인증

### 전자문서 기능

- 로그인 기반 전자문서 파일 업로드
- 전자문서 목록 조회 및 파일 다운로드

## 기능 검증

FastAPI Swagger UI에서 API를 호출하고 응답을 확인했습니다. JWT 인증이 필요한 보호 API는 발급받은 토큰을 적용해 정상 호출 여부를 확인했습니다.

## 문제 해결 경험

보호 API를 호출하는 과정에서 HTTP 401 인증 오류가 발생했습니다. 다음 순서로 인증 설정을 점검하고 호출을 확인했습니다.

1. JWT 토큰의 발급 상태를 확인했습니다.
2. Swagger UI의 Authorize 설정을 확인했습니다.
3. 올바른 토큰을 적용한 뒤 보호 API를 다시 호출하여 정상 호출을 확인했습니다.

## 통합 현황

에이전트 간 실제 연동과 전체 E2E 통합의 완료 여부는 확인되지 않았습니다.

## GitHub 저장소

[A2A Agent Company GitHub 저장소](https://github.com/jooho-le/A2A-agent-company)

[← 프로젝트 목록으로 돌아가기]({{< relref "/" >}}#projects)
