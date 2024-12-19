import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutMePage from './pages/AboutMePage';
import ContactMePage from './pages/ContactMePage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import Header from './components/Header';

function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutMePage />} />
          <Route path="/contact" element={<ContactMePage />} />
          <Route path="/project" element={<ProjectsPage />} />
          <Route path="/skill" element={<SkillsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
