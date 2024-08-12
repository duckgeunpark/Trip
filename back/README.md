# Backend (FastAPI)

## 프로젝트 구조

### `Root` 디렉토리
- `alembic/` : 데이터베이스 마이그레이션 관련 파일
- `app/` : 주요 애플리케이션 코드 위치
- `tests/` : 단위 테스트 및 통합 테스트 코드
- `requirements.txt` : Python 의존성 패키지 목록

    ### `app` 디렉토리
    - `api/`: API 라우트 및 엔드포인트
    - `core/`: 핵심 설정 및 보안 관련 코드
    - `db/`: 데이터베이스 모델 및 연결 설정
    - `services/`: 비즈니스 로직
    - `schemas/`: Pydantic 모델
    - `utils/`: 유틸리티 함수