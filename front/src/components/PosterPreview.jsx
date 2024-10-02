import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../styles/PosterPreview.module.css';

const PosterPreview = () => {
  const photos = useSelector(state => state.poster.photos);
  // 여기에 포스터 생성 로직을 추가할 수 있습니다.

  return (
    <div className={styles.previewContainer}>
      <h2 className={styles.previewTitle}>포스터 미리보기</h2>
      <div className={styles.posterCanvas}>
        {photos.length > 0 ? (
          <div className={styles.photoGrid}>
            {photos.slice(0, 4).map((photo, index) => (
              <img
                key={index}
                src={URL.createObjectURL(photo)}
                alt={`Uploaded photo ${index + 1}`}
                className={styles.previewPhoto}
              />
            ))}
          </div>
        ) : (
          <p className={styles.placeholderText}>사진을 업로드하면 여기에 포스터가 생성됩니다.</p>
        )}
      </div>
    </div>
  );
};

export default PosterPreview;