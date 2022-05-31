import { useState } from 'react';

import Button from './Button';
import ModalDefault from './Modal';
import styles from './BottomBar.module.scss';
import { AddNewStationForm } from './AddNewStationForm';
import { addNewRadioStationToLS } from '../utils/addNewRadioStationToLS';

export const BottomBar = () => {
  const [isModalOpen, setModalIsOpen] = useState(false);

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
        <AddNewStationForm onSubmit={addNewRadioStationToLS} />
      </ModalDefault>
    </div>
  );
};
