import { useState } from 'react';
import StationsList from '../components/StationsList';
import styles from './Content.module.scss';
import Button from '../components/Button';
import getAudioManager from '../utils/audio-manager';
import StationsListItem from '../components/StationsListItem';
const hardcodedRadioUrl = 'http://17573.live.streamtheworld.com/WCTKFMAAC.aac';

const radioStationsArray = [
  {
    id: 'cat-country',
    name: 'Cat County 98.1',
    link: 'http://17573.live.streamtheworld.com/WCTKFMAAC.aac',
  },
  {
    id: 'americas-country',
    name: "America's Country",
    link: 'https://ais-sa2.cdnstream1.com/1976_128.mp3',
  },
  {
    id: 'ktwb-big-country',
    name: 'KTWB Big Country 92.5',
    link: 'https://14083.live.streamtheworld.com/KTWBFMAAC.aac',
  },
  {
    id: 'country-208',
    name: 'Country 108',
    link: 'http://icepool.silvacast.com/COUNTRY108.mp3',
  },
  {
    id: 'kickin-country',
    name: "Kickin' Country 181.fm",
    link: 'https://listen.181fm.com/181-kickincountry_128k.mp3',
  },
];

const audioManagerInstance = getAudioManager(hardcodedRadioUrl);

const handlePlay = () => {
  audioManagerInstance.play();
};

const handlePause = () => {
  audioManagerInstance.pause();
};

const handleSelect = (selectedStation) => {
  audioManagerInstance.select(selectedStation);
};

const Content = (props) => {
  const [radioStationsState, setRadioStationsState] =
    useState(radioStationsArray);

  return (
    <div data-testid="content" className={styles.Content}>
      <StationsList handleSelect={handleSelect}>
        {radioStationsState.map((station, i) => (
          <StationsListItem
            key={i}
            title={station.name}
            title2={station.link}
            button={true}
          ></StationsListItem>
        ))}
      </StationsList>
    </div>
  );
};
export default Content;
