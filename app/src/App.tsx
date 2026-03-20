import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import LocationPage from './pages/LocationPage';
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
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;