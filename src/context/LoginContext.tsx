import React, { createContext, useState, useContext } from "react";

interface LoginContextType {
  showLoginForm: boolean;
  setShowLoginForm: (value: boolean) => void;
  toggleLoginPopup: () => void;
}

const LoginContext = createContext<LoginContextType | undefined>(undefined);

export const LoginProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const toggleLoginPopup = () => {
    setShowLoginForm((prev) => !prev);
  };

  return (
    <LoginContext.Provider value={{ showLoginForm, setShowLoginForm, toggleLoginPopup }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error("useLogin must be used within a LoginProvider");
  }
  return context;
};