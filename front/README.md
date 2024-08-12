# Frontend (React.js)

## 프로젝트 구조

### `Root` 디렉토리
- `public/`: 정적 파일 저장소
- `package.json`: 프로젝트 의존성 및 스크립트
- `scr/` : 주요 애플리케이션 코드

    ### `src` 디렉토리

    - #### 컴포넌트 및 페이지
        - `components/`: 재사용 가능한 UI 컴포넌트
        - `pages/`: 각 라우트에 해당하는 페이지 컴포넌트

    - #### 로직 및 유틸리티
        - `services/`: API 호출 등 외부 서비스와의 통신 담당
        - `hooks/`: 커스텀 React 훅
        - `utils/`: 유틸리티 함수
        - `contexts/`: React Context 관련 파일

    - #### 스타일 및 에셋
        - `styles/`: 전역 스타일 및 테마 관련 파일
        - `assets/`: 이미지, 폰트 등의 에셋