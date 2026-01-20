import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("fb_user")) || null
  );

  const login = (email, password) => {
    if (email && password) {
      const userData = { email };
      localStorage.setItem("fb_user", JSON.stringify(userData));
      setUser(userData);
      return true;
    }
    return false;
  };

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
