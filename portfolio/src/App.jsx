import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import Header from './components/Header';
import SingleProjectPage from './pages/SingleProjectPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project" element={<ProjectsPage />} />
          <Route path='/project/:id' element={<SingleProjectPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
