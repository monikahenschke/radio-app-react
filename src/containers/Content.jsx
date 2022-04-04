import StationsList from '../components/StationsList';
import styles from './Content.module.scss';
import getAudioManager from '../utils/audio-manager';
import StationsListItem from '../components/StationsListItem';

const audioManagerInstance = getAudioManager('');

const handleSelect = (selectedStation) => {
  audioManagerInstance.select(selectedStation);
};

const Content = (props) => {
  const radioStationsLS = JSON.parse(localStorage.getItem('stations'));

  return (
    <div data-testid="content" className={styles.Content}>
      <StationsList handleSelect={handleSelect}>
        {radioStationsLS.map((station, i) => (
          <StationsListItem
            key={i}
            title={station.name}
            title2={station.link}
            button={true}
          />
        ))}
      </StationsList>
    </div>
  );
};
export default Content;
