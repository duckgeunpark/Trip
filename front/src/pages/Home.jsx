import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FeatureCard from '../components/FeatureCard';
import HowToUse from '../components/HowToUse';
import { Camera, Map, Edit, Share } from 'lucide-react';
import styles from '../styles/Home.module.css';

const Home = () => {
    const features = [
        { icon: Camera, title: "사진 업로드", description: "여행 사진을 쉽게 업로드하세요" },
        { icon: Map, title: "경로 생성", description: "AI가 자동으로 여행 경로를 만들어줍니다" },
        { icon: Edit, title: "포스터 생성", description: "맞춤형 여행 포스터를 제작합니다" },
        { icon: Share, title: "간편한 공유", description: "SNS에 바로 공유할 수 있습니다" }
    ];

    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.main}>
                <section className={styles.hero}>
                    <h2 className={styles.title}>여행 사진으로 멋진 포스터를 만들어보세요</h2>
                    <p className={styles.description}>
                        AI가 당신의 여행 사진을 분석하여 자동으로 여행 경로를 생성하고,
                        아름다운 포스터로 만들어드립니다.
                    </p>
                    <Link to="/create-poster" className={styles.startButton}>지금 시작하기</Link>
                </section>

                <section className={styles.features}>
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </section>
                <HowToUse />
            </main>
            <Footer />
        </div>
    );
};

export default Home;