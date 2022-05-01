import logo from './logo.svg';
import './App.css';
import HomeWindow from './components/Home/HomePage';
import FooterSection from './components/Footer/Footer';
import HeaderSection from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Cars from './components/Cars/Cars';
import Location from './components/location/Location';
import EditRes from './components/EditRes/EditRes';

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
