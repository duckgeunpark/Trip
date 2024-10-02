import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { store } from './store';
import Home from './pages/Home';
import CreatePoster from './pages/CreatePoster';
import './styles/global.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-poster" element={<CreatePoster />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;