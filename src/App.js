import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import LoginScreen from './components/LoginScreen/LoginScreen';
import MenuScreen from './components/MenuScreen/MenuScreen';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <LoginScreen/>
      <MenuScreen/>
    </div>
  );
}

export default App;
