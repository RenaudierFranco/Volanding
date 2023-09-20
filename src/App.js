import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginScreen from './components/LoginScreen/LoginScreen';
import FormLoginContainer from './components/FormLogin/FormLoginContainer';
import FormRegister from './components/FormRegister/FormRegister';
import HomeScreenContainer from './components/HomeScreenContainer/HomeScreenContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import FormFlight from './components/FormFlight/FormFlight';
import MyFlights from './components/MyFlights/MyFlights';
import UserContextProvider from './Context/UserContext';


function App() {
  return (
    <>
      <UserContextProvider>
        <BrowserRouter>
          <Routes>
            <Route exat path='/' element={<LoginScreen/>} />
            <Route exat path='/FormLoginContainer' element={<FormLoginContainer/>} />
            <Route exat path='/FormRegister' element={<FormRegister/>} /> 
            <Route exat path='/home' element={<HomeScreenContainer/>} />
            <Route exat path='/item/:itemId' element={<ItemDetailContainer/>} />
            <Route exat path='/FormFlight' element={<FormFlight/>} />
            <Route exat path='/MyFlights' element={<MyFlights/>} />
          </Routes>  
        </BrowserRouter>
      </UserContextProvider>
    </>
  )
}

export default App;