import { createContext } from "react";
import { toursPackage } from "../../data/toursData";
export const store = createContext();
import { Swatdaytourpackage } from "../../data/toursData";
import { foreignerPackages } from "../../data/toursData";
export const StoreProvider = ({ children }) => {
  return (
    <store.Provider
      value={{
        toursPackage,
        Swatdaytourpackage,
        foreignerPackages,
      }}
    >
      {children}
    </store.Provider>
  );
};
