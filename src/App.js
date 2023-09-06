import './App.css'
import NavBar from './components/NavBar/NavBar'
import LoginScreen from './components/LoginScreen/LoginScreen'
import FormLogin from './components/FormLogin/FormLogin'
import FormRegister from './components/FormRegister/FormRegister'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path="LoginScreen" element={<LoginScreen/>} />
          <Route exact path="FormLogin" element={<FormLogin/>} />
          <Route exact path="FormRegister" element={<FormRegister/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App