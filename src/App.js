import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import LoginScreen from './components/LoginScreen/LoginScreen'
import FormLogin from './components/FormLogin/FormLogin'
import FormRegister from './components/FormRegister/FormRegister'
import InputDate from './components/InputDate/InputDate'
import Item from './components/Item/Item'
import FormPlane from './components/FormPlane/FormPlane'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="LoginScreen" element={<LoginScreen/>} />
          <Route exact path="NavBar" element={<NavBar/>} />
          <Route exact path="FormLogin" element={<FormLogin/>} />
          <Route exact path="FormRegister" element={<FormRegister/>} />
          <Route exact path="InputDate" element={<InputDate/>} />
          <Route exact path="Item" element={<Item/>} />
          <Route exact path="FormPlane" element={<FormPlane/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;