import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Support from './components/Support';
import AllnOne from './components/AllnOne';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Hero/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/support' element={<Support/>} />
          <Route path='/platforms' element={<AllnOne/>} />
          <Route path='/pricing' element={<Pricing/>} />
        </Routes>
        <Footer />
    </>
   
  
  );
}

export default App;
