import { createContext, useEffect, useState, useMemo } from 'react';
import Cookies from 'js-cookie';

import { getAudioManager } from '../utils/audio-manager';
import { setBasicRadioStationsToLS } from '../utils/setBasicRadioStations';

export const StationsContext = createContext();

export const StationsContextProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [radioStationsListLS, setRadioStationsListLS] = useState([]);
  const [stationCurrentlyPlaying, setStationCurrentlyPlaying] =
    useState(undefined);
  const [isRadioPlaying, setIsRadioPlaying] = useState(false);

  useEffect(() => {
    if (!Cookies.get('visited')) {
      Cookies.set('visited', true);
      // set basic radio stations in local storage on first visit
      setBasicRadioStationsToLS();
    }
    refreshRadioStations();
  }, []);

  function getRandomRadtioStation() {
    const randomInt = getRandomInt(0, radioStationsListLS.length);
    return radioStationsListLS[randomInt];
  }

  const audioManagerInstance = useMemo(() => {
    return getAudioManager();
  }, []);

  function refreshRadioStations() {
    let radioStations = JSON.parse(localStorage.getItem('stations'));
    setRadioStationsListLS(radioStations);
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function addNewRadioStation(data, setModalIsOpen, radioStationsListLS) {
    setModalIsOpen(false);

    const stationFromForm = createRadioStationFromData(data);
    const stationsFromLocalStorage = radioStationsListLS;
    stationsFromLocalStorage.push(stationFromForm);
    localStorage.setItem('stations', JSON.stringify(stationsFromLocalStorage));
    refreshRadioStations();
  }

  const handleSelect = (stationName, stationUrl) => {
    setStationCurrentlyPlaying(stationName);
    setIsRadioPlaying(true);
    audioManagerInstance.select(stationUrl);
  };
  const handlePause = () => {
    setIsRadioPlaying(false);
    audioManagerInstance.pause();
  };

  const handlePlay = () => {
    if (!stationCurrentlyPlaying) {
      const randomRadioStation = getRandomRadtioStation();
      audioManagerInstance.select(randomRadioStation.link);
      setStationCurrentlyPlaying(randomRadioStation.name);
    }

    setIsRadioPlaying(true);
    audioManagerInstance.play();
  };

  const handlePlayPause = () => {
    if (isRadioPlaying) {
      handlePause();
    } else {
      handlePlay();
    }
  };

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
        handleSelect,
        handlePlayPause,
        stationCurrentlyPlaying,
        isRadioPlaying,
      }}
    >
      {children}
    </StationsContext.Provider>
  );
};
