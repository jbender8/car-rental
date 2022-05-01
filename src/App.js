import logo from './logo.svg';
import './App.css';
import HomeWindow from './components/HomePage';
import FooterSection from './components/Footer';
import HeaderSection from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeaderSection/>
      <HomeWindow/>
      <FooterSection />
    </div>
  );
}

export default App;
