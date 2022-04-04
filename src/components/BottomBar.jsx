import Button from './Button';
import ModalDefault from './Modal';
import styles from './BottomBar.module.scss';
import { useState } from 'react';

export const BottomBar = () => {
  const [isModalOpen, setModalIsOpen] = useState(false);
  const radioStationsAddingContentModal = (
    <div className={styles.addNewStationModal}>
      <p>Add new radio station</p>
      <div className={styles.addNewStationInput}>
        <input type="text" placeholder="Station Stream URL..."></input>
        <Button size="big" onClick={() => setModalIsOpen(false)}>
          Save
        </Button>
      </div>
    </div>
  );

  return (
    <div className={styles.bottomBar}>
      <Button
        onClick={() => {
          setModalIsOpen(true);
        }}
      >
        {'Add new radio station'}
      </Button>

      <ModalDefault
        isModalOpen={isModalOpen}
        setModalIsOpen={setModalIsOpen}
        buttonName="Add"
      >
        {radioStationsAddingContentModal}
      </ModalDefault>
    </div>
  );
};
