import React, { createContext, useState } from 'react';



export const AuthContext = createContext({} as any);


export function AuthContextProvider({ children }: any) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);




  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  )
}

