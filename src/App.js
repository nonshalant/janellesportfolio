import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import Dpad from './components/work/dp+ad/Dpad';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/' element={<Contact/>}></Route>
        <Route path='/work/dp+ad' element={<Dpad/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
