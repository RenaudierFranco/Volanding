import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginScreen from './components/LoginScreen/LoginScreen';
import FormLogin from './components/FormLogin/FormLogin';
import FormRegister from './components/FormRegister/FormRegister';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import InputDate from './components/InputDate/InputDate';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import FormFlight from './components/FormFlight/FormFlight';

function App() {
  return (
    <div className="App" 
      style={{/*
        "background-image" : "url('https://get.wallhere.com/photo/digital-art-artwork-illustration-environment-pink-violet-pink-background-concept-art-freedom-sky-skyscape-city-cityscape-tower-skyscraper-building-clouds-mountains-landscape-birds-women-outdoors-aircraft-airplane-1820887.jpg')",
        "background-position" : "auto",
        "background-repeat" : "no-repeat", 
        "background-attachment" : "fixed",        
        "background-size" : "cover"
        */
      }}>
      <BrowserRouter>
        <Routes>
          <Route exat path='/' element={<LoginScreen/>} />
          <Route exat path='/LoginScreen' element={<LoginScreen/>} />
          <Route exat path='/FormLogin' element={<FormLogin/>} />
          <Route exat path='/FormRegister' element={<FormRegister/>} /> 
          <Route exat path='/home' element={<ItemListContainer/>} />
          <Route exat path='/InputDate' element={<InputDate/>} />
          <Route exat path='/item/:itemId' element={<ItemDetailContainer/>} />
          <Route exat path='/FormFlight' element={<FormFlight/>} />
        </Routes>  
      </BrowserRouter>
    </div>
  )
}

export default App;