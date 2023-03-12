
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cards from './components/Cards';
import End from './components/End';



function App() {
  return (
<>
    <Navbar />
    <h2 class="text-4xl font-medium leading-tight ml-20 mt-10 mb-[20px]">New Arrival</h2>
    <Cards/>
    
    <Footer/>
</>




  );
}

export default App;
