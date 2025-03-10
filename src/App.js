import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewReleasesPage from './pages/NewReleasesPage';
import HomePage from './pages/HomePage';
import HomeAndGardenPage from './pages/HomeAndGardenPage';
import ElectronicsPage from './pages/ElectronicsPage';
import StationaryPage from './pages/StationaryPage';
import BabyProductsPage from './pages/BabyProductsPage';
import HandToolsPage from './pages/HandToolsPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/new-releases' element={<NewReleasesPage />} />
          <Route path='/home-and-garden' element={<HomeAndGardenPage />} />
          <Route path='/electronics' element={<ElectronicsPage />} />
          <Route path='/stationary' element={<StationaryPage />} />
          <Route path='/baby-products' element={<BabyProductsPage />} />
          <Route path='/hand-tools' element={<HandToolsPage />} />
          <Route path='*' element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
