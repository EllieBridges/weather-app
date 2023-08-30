import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import NoPage from './NoPage';
import './style.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const element = document.getElementById('root');

if (!element) {
  throw new Error('Root element not found');
}

const root = ReactDOM.createRoot(element);
root.render(<App />);

export default App;
