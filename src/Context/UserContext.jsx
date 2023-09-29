import { React, createContext} from "react";
import { useState } from "react";
  
export const UserContext = createContext();
  
  const UserContextProvider = ({children}) => {

  const [log, setLog] = useState(false);
  const [logForm, setLogForm] = useState(false);
  const [ userId, setUserId ] = useState(null)
  const [ userName, setUserName] = useState('');
  
  const logIn = () => {
    logForm?
      setLogForm(false)
    :
      setLogForm(true)
  }

  const logOut = () => {
    setLog(false);
    localStorage.setItem('isLoggedIn', 'false'); 
    localStorage.removeItem('user');
    localStorage.removeItem('newOrder');
    setUserName('');
  }

  const handleLoginSuccess = (user) => {
        setLog(true);
        setLogForm(false);
        localStorage.setItem('isLoggedIn', 'true'); 
        setUserId(user.id)
        setUserName(user.name)
  };

  return (
        <>
          <UserContext.Provider value= {{handleLoginSuccess, logIn, logOut, log, logForm, setLog, userId, setUserId, userName}}>
              {children}
          </UserContext.Provider>
        </>
  )
}

export default UserContextProvider;