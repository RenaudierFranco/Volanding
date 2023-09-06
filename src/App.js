import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import LoginScreen from './components/LoginScreen/LoginScreen';
import FormLogin from './components/FormLogin/FormLogin';
import FormRegister from './components/FormRegister/FormRegister';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import InputDate from './components/InputDate/InputDate';



function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route exat path='/' element={<LoginScreen/>} />
          <Route exat path='/home' element={<NavBar/>} />
          <Route exat path='/LoginScreen' element={<LoginScreen/>} />
          <Route exat path='/FormLogin' element={<FormLogin/>} />
          <Route exat path='/FormRegister' element={<FormRegister/>} /> 
          <Route exat path='/home' element={<ItemListContainer/>} />
          <Route exat path='/InputDate' element={<InputDate/>} />

        </Routes>  
      </BrowserRouter>

    </div>
  )
}

export default App;