import './App.css';
import HomeWindow from './components/PageConatiner/Home/HomePage';
import FooterSection from './components/Footer/Footer';
import HeaderSection from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Cars from './components/PageConatiner/Cars/Cars';
import Location from './components/PageConatiner/location/Location';
import EditRes from './components/PageConatiner/EditRes/EditRes';
import Manager from './components/PageConatiner/ManagerPortal/Manager';
import { BrowserRouter as Router, Routes, 
  Route,} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeaderSection/>
      <Router>
      <Routes>
        <Route exact path="/" element={<HomeWindow/>} />
        <Route path="/Edit"  element={<EditRes/>} />
        <Route path="/Cars"  element={<Cars/>} />
        <Route path="/Location" element={<Location/>} />
        <Route path="/Manager" element={<Manager/>} />
      </Routes>
      </Router>
      <FooterSection />
    </div>
  );
}

export default App;
