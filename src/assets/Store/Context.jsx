import { createContext } from "react";
import { toursPackage } from "../../data/toursData";
export const store = createContext();

export const StoreProvider = ({ children }) => {
  return (
    <store.Provider
      value={{
        toursPackage,
      }}
    >
      {children}
    </store.Provider>
  );
};
