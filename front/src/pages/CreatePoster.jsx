import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage, setPhotos } from '../store/posterSlice';
import PosterPreview from '../components/PosterPreview';
import styles from '../styles/CreatePoster.module.css';

const CreatePoster = () => {
  const dispatch = useDispatch();
  const messages = useSelector(state => state.poster.messages);
  const photos = useSelector(state => state.poster.photos);
  const [userInput, setUserInput] = useState('');
  const chatAreaRef = useRef(null);

  const handlePhotoUpload = (e) => {
    const uploadedPhotos = Array.from(e.target.files);
    dispatch(setPhotos(uploadedPhotos));
    dispatch(addMessage({ sender: 'bot', text: `${uploadedPhotos.length}장의 사진이 업로드되었습니다. 다음 단계로 진행할까요?` }));
  };

  useEffect(() => {
    if (chatAreaRef.current) {
      chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (userInput.trim()) {
      dispatch(addMessage({ sender: 'user', text: userInput }));
      setUserInput('');
      // 여기에 사용자 입력에 대한 응답 로직을 추가할 수 있습니다.
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.chatArea} ref={chatAreaRef}>
        {messages.map((message, index) => (
          <div key={index} className={`${styles.message} ${styles[message.sender]}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className={styles.inputArea}>
        <input
          type="file"
          id="photo-upload"
          multiple
          onChange={handlePhotoUpload}
          accept="image/*"
          style={{ display: 'none' }}
        />
        <label htmlFor="photo-upload" className={styles.uploadButton}>사진 업로드</label>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="메시지를 입력하세요..."
          className={styles.textInput}
        />
        <button onClick={handleSendMessage} className={styles.sendButton}>전송</button>
      </div>
      <div className={styles.previewContainer}>
        <PosterPreview />
      </div>
    </div>
  );
};

export default CreatePoster;