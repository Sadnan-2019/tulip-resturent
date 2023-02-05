import logo from './logo.svg';
import './App.css';
import TopNav from './Component/TopNav/TopNav';
import Nav from './Component/Nav/Nav';
import Landing from './Component/Landing/Landing';
import About from './Component/About/About';
import WhyUs from './Component/WhyUs/WhyUs';
import Menu from './Component/Menu/Menu';
import Special from './Component/Specials/Special';
import Events from './Component/Events/Events';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <div className="">
      <TopNav></TopNav>
      <Nav className="navbar-mobile mobile-nav-toggle"></Nav>
      <Landing></Landing>
      <About></About>
      <WhyUs></WhyUs>
      <Footer></Footer>
      {/* <Menu></Menu>
      <Special></Special>
      <Events></Events> */}
      
      
    </div>
  );
}

export default App;
