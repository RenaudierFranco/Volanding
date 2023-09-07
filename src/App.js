import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginScreen from './components/LoginScreen/LoginScreen'
import FormLogin from './components/FormLogin/FormLogin'
import FormRegister from './components/FormRegister/FormRegister'
import InputDate from './components/InputDate/InputDate'
import Item from './components/Item/Item'
import FormPlane from './components/FormPlane/FormPlane'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailConteiner from './components/ItemDetailContainer/ItemDetailContainer'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginScreen/>} />
          <Route exact path="FormLogin" element={<FormLogin/>} />
          <Route exact path="FormRegister" element={<FormRegister/>} />
          <Route exact path="InputDate" element={<InputDate/>} />
          <Route exact path="Item" element={<Item/>} />
          <Route exat path='home' element={<ItemListContainer/>} />
          <Route exat path="InputDate" element={<InputDate/>} />
          <Route exact path="FormPlane" element={<FormPlane/>} />
          <Route exact path="ItemDetailContainer" element={<ItemDetailConteiner/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;