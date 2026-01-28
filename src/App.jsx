import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ProduksjonerPage from './pages/ProduksjonerPage';
import ProductionDetail from './pages/ProductionDetail';
import ServicePage from './pages/ServicePage';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="produksjoner" element={<ProduksjonerPage />} />
            <Route path="produksjoner/:slug" element={<ProductionDetail />} />
            <Route path="film-og-video/:slug" element={<ServicePage />} />
            {/* Catch all redirect to home or 404 */}
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
