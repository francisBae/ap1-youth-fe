# 압구정1동 청년미사 미사통상문 웹사이트

이 프로젝트는 압구정1동 청년미사의 미사통상문을 웹에서 쉽게 볼 수 있도록 만든 웹 애플리케이션입니다.

## 주요 기능

-   📱 반응형 디자인으로 모바일과 데스크톱 모두 지원
-   📜 미사통상문 섹션별 네비게이션
-   🎵 성가 번호 표시 및 스타일링
-   📖 예수님 말씀 강조 표시
-   🔍 섹션별 빠른 이동
-   ⬆️ 상단 이동 버튼

## 기술 스택

-   React
-   TypeScript
-   Chakra UI
-   Vite

## 시작하기

### 필수 조건

-   Node.js 16.0.0 이상
-   npm 또는 yarn

### 설치

```bash
# 저장소 클론
git clone [repository-url]

# 프로젝트 디렉토리로 이동
cd my-youth-site

# 의존성 설치
npm install
# 또는
yarn install
```

### 개발 서버 실행

```bash
npm run dev
# 또는
yarn dev
```

### 빌드

```bash
npm run build
# 또는
yarn build
```

## 프로젝트 구조

```
src/
├── pages/
│   └── MassOrdinaryPage.tsx    # 미사통상문 메인 페이지
├── components/                 # 재사용 가능한 컴포넌트
├── styles/                    # 전역 스타일
└── App.tsx                    # 앱의 루트 컴포넌트
```

## 주요 섹션

-   시작예식
-   말씀전례
-   성찬전례
-   감사 기도
-   영성체 예식
-   마침예식

## 스타일 가이드

-   색상

    -   주요 색상: `#8d6a2b` (골드 브라운)
    -   보조 색상: `#bfa16c` (라이트 골드)
    -   배경색: `#f8f6f2` (아이보리)
    -   제목 색상: `#C71585` (딥 핑크)

-   폰트
    -   기본 폰트: 'Noto Sans KR'
    -   제목: bold
    -   본문: regular
    -   성가 번호: medium

## 기여하기

1. 이 저장소를 포크합니다.
2. 새로운 브랜치를 생성합니다 (`git checkout -b feature/amazing-feature`).
3. 변경사항을 커밋합니다 (`git commit -m 'Add some amazing feature'`).
4. 브랜치에 푸시합니다 (`git push origin feature/amazing-feature`).
5. Pull Request를 생성합니다.

## 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 연락처

문의사항이 있으시면 [이메일 주소]로 연락해 주세요.
