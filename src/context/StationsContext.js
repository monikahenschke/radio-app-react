import { createContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';

import { setBasicRadioStationsToLS } from '../utils/setBasicRadioStations';
export const StationsContext = createContext();

export const StationsContextProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [radioStationsListLS, setRadioStationsListLS] = useState([]);

  useEffect(() => {
    if (!Cookies.get('visited')) {
      Cookies.set('visited', true);
      // set basic radio stations in local storage on first visit
      setBasicRadioStationsToLS();
    }
    refreshRadioStations();
  }, []);

  function refreshRadioStations() {
    let radioStations = JSON.parse(localStorage.getItem('stations'));
    setRadioStationsListLS(radioStations);
  }

  function addNewRadioStation(data, setModalIsOpen, radioStationsListLS) {
    setModalIsOpen(false);

    const stationFromForm = createRadioStationFromData(data);
    const stationsFromLocalStorage = radioStationsListLS;
    stationsFromLocalStorage.push(stationFromForm);
    localStorage.setItem('stations', JSON.stringify(stationsFromLocalStorage));
    refreshRadioStations();
  }

  function createRadioStationFromData(data) {
    const newUniqueId = Date.now();
    const radioStationAdded = {
      id: newUniqueId,
      name: data.stationName,
      link: data.stationUrl,
    };
    return radioStationAdded;
  }

  return (
    <StationsContext.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
        radioStationsListLS,
        addNewRadioStation,
        refreshRadioStations,
      }}
    >
      {children}
    </StationsContext.Provider>
  );
};
