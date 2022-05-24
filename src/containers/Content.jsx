import { useState, useMemo } from 'react';

import StationsList from '../components/StationsList';
import styles from './Content.module.scss';
import getAudioManager from '../utils/audio-manager';
import StationsListItem from '../components/StationsListItem';
import { Pagination } from '../components/Pagination';

const audioManagerInstance = getAudioManager('');

const handleSelect = (selectedStation) => {
  audioManagerInstance.select(selectedStation);
};

const Content = (props) => {
  const [stationsListCurrentlyShown, setStationsListCurrentlyShown] = useState(
    []
  );

  const radioStationsListLS = useMemo(
    () => JSON.parse(localStorage.getItem('stations')),
    []
  );
  return (
    <div data-testid="content" className={styles.Content}>
      <p className={styles.ContentHeadline}>Your favourite radio stations</p>
      <StationsList handleSelect={handleSelect}>
        {stationsListCurrentlyShown &&
          stationsListCurrentlyShown.map((station, i) => (
            <StationsListItem
              key={i}
              title={station.name}
              title2={station.link}
              button={true}
            />
          ))}
      </StationsList>
      <Pagination
        itemsPerPage={4}
        listOfItems={radioStationsListLS}
        setItemsListCurrentlyShown={setStationsListCurrentlyShown}
      />
    </div>
  );
};
export default Content;
