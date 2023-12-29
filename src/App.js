import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import Dpad from './components/work/dp+ad/Dpad';
import Acting from './components/work/acting/Acting';
import DirectingAndProduced from './components/work/directing+produced/DirectingAndProduced';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/work/dp+ad' element={<Dpad/>}></Route>
        <Route path='/work/acting' element={<Acting/>}></Route>
        <Route path='/work/directing+produced' element={<DirectingAndProduced/>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
