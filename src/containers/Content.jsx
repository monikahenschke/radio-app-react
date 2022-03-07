import { useState } from 'react';

import StationsList from '../components/StationsList';
import styles from './Content.module.scss';
import getAudioManager from '../utils/audio-manager';
import Button from '../components/Button';
import StationsListItem from '../components/StationsListItem';
import ModalDefault from '../components/Modal';

const audioManagerInstance = getAudioManager('');

const handleSelect = (selectedStation) => {
  audioManagerInstance.select(selectedStation);
};

const Content = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const radioStationsLS = JSON.parse(localStorage.getItem('stations'));
  const textInsideModal = (
    <p>
      It's the modal with focus trapping. <a href="##"> Focus on it</a>
    </p>
  );

  return (
    <div data-testid="content" className={styles.Content}>
      <Button
        onClick={() => {
          setModalIsOpen(true);
        }}
        children="Modal open"
      />

      <ModalDefault
        children={textInsideModal}
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      />

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
