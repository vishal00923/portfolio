import { createContext, useState } from 'react';

export const AppContext = createContext({
  isSidebarOpen: false,
  setIsSidebarOpen: () => {},
});

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const value = { isSidebarOpen, setIsSidebarOpen };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
