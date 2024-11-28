import './App.css';
import Header from './Components/Header';
import Home from './pages/Home';
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom';
import View from './pages/View';
function App() {
  return (
    <>
    <Header/>
   <Routes> 
    <Route  path='/' element={<Home/>}/>
    <Route path='/view/:id' element={<View/>} />
    </Routes>
      <Footer/>

    </>

  );
}

export default App;
