import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import LoginScreen from './components/LoginScreen/LoginScreen';
import FormLoginContainer from './components/FormLogin/FormLoginContainer';
import FormRegister from './components/FormRegister/FormRegister';
import HomeScreenContainer from './components/HomeScreenContainer/HomeScreenContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import FlightStatusContainer from './components/FlightStatusContainer/FlightStatusContainer';
import MyFlights from './components/MyFlights/MyFlights';
import FormOperator from './components/FormOperator/FormOperator';
import UserContextProvider from './Context/UserContext';

function App() {
  const isDevelopment = process.env.NODE_ENV === 'development';
  const basename = isDevelopment ? '/' : '/volanding';  // Adjust basename based on environment

  return (
    <UserContextProvider>
      <Router basename={basename}>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/FormLoginContainer" element={<FormLoginContainer />} />
          <Route path="/FormRegister" element={<FormRegister />} />
          <Route path="/home" element={<HomeScreenContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/FlightStatusContainer" element={<FlightStatusContainer />} />
          <Route path="/MyFlights/:userId" element={<MyFlights />} />
          <Route path="/FormOperator" element={<FormOperator />} />
        </Routes>
      </Router>
    </UserContextProvider>
  );
}

export default App;


