import { React, createContext} from "react";
import { useState } from "react";
  
export const UserContext = createContext();
  
  const UserContextProvider = ({children}) => {

  const [log, setLog] = useState(false);
  const [logForm, setLogForm] = useState(false);
  
  const logIn = () => {
    logForm?
      setLogForm(false)
    :
      setLogForm(true)
  }

  const logOut = () => {
    setLog(false)
    localStorage.setItem('isLoggedIn', 'false'); // Almacenar en localStorage
  }

  const handleLoginSuccess = () => {
        setLog(true);
        setLogForm(false); // Oculta el formulario después del inicio de sesión exitoso
        localStorage.setItem('isLoggedIn', 'true'); // Almacenar en localStorage
  };

  return (
        <>
          <UserContext.Provider value= {{handleLoginSuccess, logIn, logOut, log, logForm, setLog}}>
              {children}
          </UserContext.Provider>
        </>
  )
}

export default UserContextProvider;