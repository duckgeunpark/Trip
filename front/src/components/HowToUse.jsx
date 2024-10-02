import React from 'react';
import styles from '../styles/HowToUse.module.css';

const HowToUse = () => {
  const steps = [
    "여행 사진을 업로드합니다",
    "AI가 사진을 분석하고 여행 경로를 생성합니다",
    "원하는 포스터 템플릿을 선택합니다",
    "AI가 생성한 포스터를 확인하고 필요시 수정합니다",
    "완성된 포스터를 저장하거나 SNS에 공유합니다"
  ];

  return (
    <section className={styles.howToUse}>
      <h2 className={styles.title}>이용 방법</h2>
      <ol className={styles.steps}>
        {steps.map((step, index) => (
          <li key={index} className={styles.step}>{step}</li>
        ))}
      </ol>
    </section>
  );
};

export default HowToUse;