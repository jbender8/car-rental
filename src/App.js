import './App.css';
import HomeWindow from './components/PageConatiner/Home/HomePage';
import FooterSection from './components/Footer/Footer';
import HeaderSection from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Cars from './components/PageConatiner/Cars/Cars';
import Location from './components/PageConatiner/location/Location';
import EditRes from './components/PageConatiner/EditRes/EditRes';
import Manager from './components/PageConatiner/ManagerPortal/Manager';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeaderSection/>
      <HomeWindow/>
      <Cars />
      <EditRes />
      <Location />
      <Manager />     
      <FooterSection />
    </div>
  );
}

export default App;
