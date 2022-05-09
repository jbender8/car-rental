import './App.css';
import HomeWindow from './components/PageConatiner/Home/HomePage';
import FooterSection from './components/Footer/Footer';
import Cars from './components/PageConatiner/Cars/Cars';
import Location from './components/PageConatiner/location/Location';
import EditRes from './components/PageConatiner/EditRes/EditRes';
import Manager from './components/PageConatiner/ManagerPortal/Manager';
import { BrowserRouter as Router, Routes, 
  Route,
  Link,
  BrowserRouter,} from "react-router-dom";
import person from "./img/icons/person-svgrepo-com.svg"
import home from "./img/icons/car-svgrepo-com.svg"
import notify from "./img/icons/notification-svgrepo-com.svg"

function App() {
  
  return (
    <div className="App">
      
        <Router>
          <div className='nav'>
          <Link to="/"><img className='homeimg' src={home}/></Link>
          <Link to="/Edit">Edit a Current Reservation</Link>
          <Link to="/Cars">Car we Offer</Link>
          <Link to="/Location">Location</Link>
            <img className='notifyimg' src={notify} />
            <Link to="/Manager"><img className='profileimg' src={person} /></Link>
          </div>
          <Routes>
            <Route exact path="/" element={<HomeWindow />} />
            <Route path="/Edit" element={<EditRes />} />
            <Route path="/Cars" element={<Cars />} />
            <Route path="/Location" element={<Location />} />
            <Route path="/Manager" element={<Manager />} />
          </Routes>
        </Router> 
      <FooterSection />
    </div>
  );
}

export default App;
