import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Footers from './components/Footers';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <Services></Services>
      <About></About>
      <Footers></Footers>
    </>
  );
}

export default App;
