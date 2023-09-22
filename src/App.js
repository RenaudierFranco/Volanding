import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginScreen from './components/LoginScreen/LoginScreen';
import FormLoginContainer from './components/FormLogin/FormLoginContainer';
import FormRegister from './components/FormRegister/FormRegister';
import HomeScreenContainer from './components/HomeScreenContainer/HomeScreenContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import FormFlight from './components/FormFlight/FormFlight';
import MyFlights from './components/MyFlights/MyFlights';
<<<<<<< HEAD
=======
import UserContextProvider from './Context/UserContext';
>>>>>>> 27a6053b472ffa53783666e9b0a7a27014425fa9


function App() {
  return (
    <>
<<<<<<< HEAD
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
=======
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
>>>>>>> 27a6053b472ffa53783666e9b0a7a27014425fa9
    </>
  )
}

export default App;