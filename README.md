# Image Search App / 이미지 검색기

This project is a simple image search application built with React and TypeScript.  
사용자가 입력한 검색어를 기반으로 이미지를 조회하고 시각적으로 출력하는 웹 애플리케이션입니다.

---

## Features / 주요 기능

- Search for images based on user input  
  사용자 검색어를 기반으로 이미지 검색
- Communicate with the Unsplash API using Axios  
  Axios를 이용한 Unsplash 이미지 API 통신
- Fullscreen modal image viewer with navigation  
  이미지 클릭 시 전체 화면 모달 뷰어 제공
- Responsive layout using Tailwind CSS  
  Tailwind CSS 기반 반응형 레이아웃 구성
- Copyable URL for sharing search results  
  검색 결과 공유를 위한 URL 복사 기능 포함

---

## Tech Stack / 사용 기술

- **Framework**: React, TypeScript  
- **Styling**: Tailwind CSS  
- **API**: Unsplash  
- **Deployment**: Vercel

---

## Getting Started / 실행 방법

### Frontend (Vite + React)

```bash
# Install dependencies / 의존성 설치
npm install

# Run the development server / 개발 서버 실행
npm run dev

```

## Deployment / 배포

This app is deployed on Vercel. You must also set your VITE_UNSPLASH_ACCESS_KEY in the Vercel Project → Settings → Environment Variables.
해당 프로젝트는 Vercel에 배포되며, .env의 키 값도 동일하게 설정해줘야 합니다.
