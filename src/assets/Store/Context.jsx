import { createContext, useState } from "react";
import {
  toursPackage,
  Swatdaytourpackage,
  foreignerPackages,
  services,
} from "../../data/toursData";
export const store = createContext();

// Importing image assets
import shanglaDayTour from "./../PackagesImages/shanglaDayTour.jpg";
import mahodandboat from "./../PackagesImages/mahodandboat.jpg";
import murghuzardaytour from "./../PackagesImages/murghuzardaytour.jpg";
import malamjabbadaytour from "./../PackagesImages/malamjabbadaytour.jpg";
import snowroad from "./../PackagesImages/snowroad.jpg";
import swattour from "./../PackagesImages/swattour.jpg";
import sangartop from "./../PackagesImages/sangartop.jpg";
import SwatValley2 from "./../PackagesImages/SwatValley2.jpg";
import ushuforestroad from "./../PackagesImages/ushuforestroad.jpg";
import mahodandcamping from "./../PackagesImages/mahodandcamping.jpg";
import chukailmeadhows from "./../PackagesImages/chukailmeadhows.jpg";
import ushusnowyroad from "./../PackagesImages/ushusnowyroad.jpg";
import snowysunny from "./../PackagesImages/snowysunny.jpg";
import snowsunnytwo from "./../PackagesImages/snowsunnytwo.jpg";
import treesinsnow from "./../PackagesImages/treesinsnow.jpg";

// Swat Scenes Array
// Swat Scenes Array
const swatScenes = [
  { name: "Shangla Top", image: shanglaDayTour },
  { name: "Mahodand ", image: mahodandboat },
  { name: "Murghuzar White palace", image: murghuzardaytour },
  { name: "Malam Jabba", image: malamjabbadaytour },
  { name: "Snowy Road", image: snowroad },
  { name: "Malam Jabba", image: swattour },
  { name: "Sangar Top", image: sangartop },
  { name: "Ushu Forest Road", image: ushuforestroad },
  { name: "Beauty", image: SwatValley2 },
  { name: "Sunny day in snow", image: snowysunny },
  { name: "Mahodand Camping", image: mahodandcamping },
  { name: "Chukail Meadows", image: chukailmeadhows },
  { name: "Ushu forest Snowy Road", image: ushusnowyroad },
  { name: "Sunny Snowy View", image: snowsunnytwo },
  { name: "Bliss Snowfall", image: treesinsnow },
];

// Store Provider Component
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
        services,
        swatScenes,
      }}
    >
      {children}
    </store.Provider>
  );
};
