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


    ### 초기 실행하기
    - ``` python -m venv fastapi_env ```
        가상환경 만들기 (디렉토리 위치 확인)
        - 1) (Windows 환경 cmd) ``` fastapi_env\Scripts\activate.bat ```
            가상환경 실행하기 (* 디렉토리 위치 확인),( ** \,/ 구분 확실하게 하기 !) 
        - 2) (Linux 환경 Terminal or Git bash) ``` source fastapi_env/Scripts/activate ```
            가상환경 실행하기 (디렉토리 위치 확인)가상환경 실행하기 (디렉토리 위치 확인)
    - ``` pip install -r requirements.txt ```
        가상환경에 설치하기 (디렉토리 위치 확인)
    - ``` cd app ```
        디렉토리 위치 변경
    - ``` uvicorn main:app --reload ```
        fastapi 실행하기 (디렉토리 위치 확인)
    - 주소 뒤에 /docs 실행 후 문서 확인

- *** 가상환경 생성 후 git commit/push 전에 .gitignire에 가상환경 추가하기 ***
- *** 추가적인 pip install 한 경우, requirements.txt에 추가하기 (+버전) ***
- *** 가상환경 종료하는법 : fastapi_env/Scripts 디렉토리 이동 후 ``` deactivate ``` 입력 ***sddsd