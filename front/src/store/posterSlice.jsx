import { createSlice } from '@reduxjs/toolkit';

const posterSlice = createSlice({
  name: 'poster',
  initialState: {
    messages: [{ sender: 'bot', text: '안녕하세요! 여행 포스터를 만들기 위해 먼저 사진을 업로드해 주세요.' }],
    photos: [],
    currentPoster: null,
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    setPhotos: (state, action) => {
      state.photos = action.payload;
    },
    setCurrentPoster: (state, action) => {
      state.currentPoster = action.payload;
    },
    clearCurrentPoster: (state) => {
      state.currentPoster = null;
    },
  },
});

export const { addMessage, setPhotos, setCurrentPoster, clearCurrentPoster } = posterSlice.actions;
export default posterSlice.reducer;