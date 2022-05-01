import logo from './logo.svg';
import './App.css';
import HomeWindow from './components/HomePage';
import FooterSection from './components/Footer';
import HeaderSection from './components/Header/Header';
import Navbar from './components/Navbar';
import Cars from './components/Cars';
import Location from './components/Location';
import EditRes from './components/EditRes';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeaderSection/>
      <HomeWindow/>
      <Cars />
      <EditRes />
      <Location />
      <FooterSection />
    </div>
  );
}

export default App;
