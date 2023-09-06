import './App.css'
import NavBar from './components/NavBar/NavBar'
import LoginScreen from './components/LoginScreen/LoginScreen'
import FormLogin from './components/FormLogin/FormLogin'
import FormRegister from './components/FormRegister/FormRegister'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <LoginScreen/>
      <FormLogin/>
      <FormRegister/>
    </div>
  )
}

export default App