import { useState, useContext } from 'react';

import StationsList from '../../components/StationList/StationsList';
import styles from './Content.module.scss';
import StationsListItem from '../../components/StationsListItem/StationsListItem';
import { Pagination } from '../../components/Pagination/Pagination';
import { StationsContext } from '../../context/StationsContext';

const Content = (props) => {
  const { radioStationsListLS } = useContext(StationsContext);
  const [stationsListCurrentlyShown, setStationsListCurrentlyShown] = useState(
    []
  );

  return (
    <div data-testid="content" className={styles.Content}>
      <p className={styles.ContentHeadline}>Your favourite radio stations</p>
      <StationsList>
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
        itemsPerPage={10}
        listOfItems={radioStationsListLS}
        setItemsListCurrentlyShown={setStationsListCurrentlyShown}
      />
    </div>
  );
};
export default Content;
