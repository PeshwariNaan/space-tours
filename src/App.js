import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home-page/home.component';
import Navbar from './routes/navigation/nav.component';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Home />
    </Fragment>
  );
}

export default App;
