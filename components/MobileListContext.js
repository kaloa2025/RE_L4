import React, { createContext, useState } from 'react';

export const MobileListContext = createContext();

export const MobileListProvider = ({ children }) => {
  const [mobiles, setMobiles] = useState([]);

  return (
    <MobileListContext.Provider value={{ mobiles, setMobiles }}>
      {children}
    </MobileListContext.Provider>
  );
};
