import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [test, setTest] = useState("ggwp value");

  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);

  const login = () => {
    setUserToken("asdf1234");
    setIsLoading(false);
  };

  const logout = () => {
    setUserToken(null);
    setIsLoading(false);
  };

  return (
    <AuthContext.Provider value={{ login, logout, userToken, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
