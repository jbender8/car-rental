import logo from './logo.svg';
import './App.css';
import HomeWindow from './components/PageConatiner/Home/HomePage';
import FooterSection from './components/Footer/Footer';
import HeaderSection from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Cars from './components/PageConatiner/Cars/Cars';
import Location from './components/PageConatiner/location/Location';
import EditRes from './components/PageConatiner/EditRes/EditRes';
import Manager from './components/PageConatiner/ManagerPortal/Manager';
import CarsCard from './components/Cards/CarsOffered/CarsCard';
import SelectACarCard from './components/Cards/SelectACar/SelectACarCard';
import AddCar from './components/Forms/AddCar/AddCar';
import Login from './components/Forms/Login/Login';
import RentACar from './components/Forms/RentACar/RentACar';
import RemoveACar from './components/Forms/RemoveACar/RemoveACar';
import EditReservation from './components/Forms/EditReservation/EditReservation';

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
      <CarsCard />
      <SelectACarCard/>
      <AddCar/>
      <Login />
      <RentACar />
      <RemoveACar />
      <EditReservation/>
      <FooterSection />
    </div>
  );
}

export default App;
