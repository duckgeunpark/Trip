import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../store/userSlice';
import styles from '../styles/Header.module.css';

const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const handleLogin = () => {
    // 실제 로그인 로직을 여기에 구현합니다.
    dispatch(login({ id: 1, username: 'testUser' }));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.logo}>TravelLogAI</h1>
        <nav>
          {isLoggedIn ? (
            <button className={styles.loginButton} onClick={handleLogout}>로그아웃</button>
          ) : (
            <>
              <button className={styles.loginButton} onClick={handleLogin}>로그인</button>
              <button className={styles.signupButton}>회원가입</button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;