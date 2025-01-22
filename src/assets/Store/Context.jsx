import { createContext, useState } from "react";
import { toursPackage } from "../../data/toursData";
export const store = createContext();
import { Swatdaytourpackage } from "../../data/toursData";
import { foreignerPackages } from "../../data/toursData";

export const StoreProvider = ({ children }) => {
  const [modalState, setModalState] = useState(false);
  return (
    <store.Provider
      value={{
        toursPackage,
        Swatdaytourpackage,
        foreignerPackages,
        modalState,
        setModalState,
      }}
    >
      {children}
    </store.Provider>
  );
};
