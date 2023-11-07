import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [isLog, setIsLog] = useState(false);
  const [logForm, setLogForm] = useState(false);
  const [userId, setUserId] = useState(null);
  const [userName, setUserName] = useState('');
  const [operator, setOperator] = useState({});

  const logIn = () => {
    setLogForm(!logForm);
  };

  const logOut = () => {
    setIsLog(false);
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('user');
    localStorage.removeItem('newOrder');
    setUserName('');
    localStorage.removeItem('userName');
  };

  const handleLoginSuccess = (user) => {
    setIsLog(true);
    setLogForm(false);
    localStorage.setItem('isLoggedIn', 'true');
    setUserId(user.id);
    localStorage.setItem('userName', user.name);
    setUserName(user.name);
  };

  return (
    <UserContext.Provider value={{
      handleLoginSuccess,
      logIn,
      logOut,
      isLog,
      logForm,
      setIsLog,
      userId,
      setUserId,
      userName,
      setUserName,
      operator,
      setOperator
    }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
