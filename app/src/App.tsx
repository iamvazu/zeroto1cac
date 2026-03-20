import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import LocationPage from './pages/LocationPage';
import JoinPage from './pages/JoinPage';
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          {/* Main Homepage */}
          <Route path="/" element={<Home />} />

          {/* Programmatic SEO Location Pages */}
          <Route path="/locations/:districtCode" element={<LocationPage />} />

          {/* Priority Enrollment Page */}
          <Route path="/join" element={<JoinPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;