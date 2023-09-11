import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginScreen from './components/LoginScreen/LoginScreen';
import FormLogin from './components/FormLogin/FormLogin';
import FormRegister from './components/FormRegister/FormRegister';
import HomeScreenContainer from './components/HomeScreenContainer/HomeScreenContainer';
import InputDate from './components/InputDate/InputDate';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import FormFlight from './components/FormFlight/FormFlight';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exat path='/' element={<LoginScreen/>} />
          <Route exat path='/LoginScreen' element={<LoginScreen/>} />
          <Route exat path='/FormLogin' element={<FormLogin/>} />
          <Route exat path='/FormRegister' element={<FormRegister/>} /> 
          <Route exat path='/home' element={<HomeScreenContainer/>} />
          <Route exat path='/InputDate' element={<InputDate/>} />
          <Route exat path='/item/:itemId' element={<ItemDetailContainer/>} />
          <Route exat path='/FormFlight' element={<FormFlight/>} />
        </Routes>  
      </BrowserRouter>
    </>
  )
}

export default App;