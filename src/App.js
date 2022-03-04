import HomePage from './pages/HomePage';
import Privacy from './pages/Privacy';
import NavBar from './NavBar';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.css'; 
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import {
  BrowserRouter,
      Routes,
  Route
  } from 'react-router-dom';

function App() {
  return (
<div className="container">
<BrowserRouter>
<NavBar/>
  <Routes>
    <Route path="/" element={<HomePage/>} exact />
    <Route path="/privacy" element={<Privacy/>} exact />
  </Routes>
</BrowserRouter>
<Footer/>
</div>
  );
}

export default App;
