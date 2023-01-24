import logo from './logo.svg';
import './App.css';
import TopNav from './Component/TopNav/TopNav';
import Nav from './Component/Nav/Nav';
import Landing from './Component/Landing/Landing';
import About from './Component/About/About';

function App() {
  return (
    <div className="">
      <TopNav></TopNav>
      <Nav className="navbar-mobile mobile-nav-toggle"></Nav>
      <Landing></Landing>
      <About></About>
      
    </div>
  );
}

export default App;
