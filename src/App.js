
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home-page/home.component';
import Navbar from './routes/navigation/nav.component';
import CrewPage from './routes/crew/crew.component';
import TechPage from './routes/tech/tech.component';
import DestinationsPage from './routes/destinations/destinations.component';

function App() {
  return (
    <Routes>
      <Route path='/{space-tours}' element={<Navbar />} >
        <Route index element={<Home />} />
        <Route path="destinations" element={<DestinationsPage />} />
        <Route path='crew' element={<CrewPage />} />
        <Route path='technology' element={<TechPage />} />
      </Route>      
    </Routes>
  );
}

export default App;
