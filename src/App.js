import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import LoginScreen from './components/LoginScreen/LoginScreen'
import FormLogin from './components/FormLogin/FormLogin'
import FormRegister from './components/FormRegister/FormRegister'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exat path='/LoginScreen' element={<LoginScreen/>} />
          <Route exat path='/FormLogin' element={<FormLogin/>} />
          <Route exat path='/FormRegister' element={<FormRegister/>} /> 
        </Routes>  
      </BrowserRouter>

    </div>
  )
}

export default App