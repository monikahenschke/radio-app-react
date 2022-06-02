import { useContext } from 'react';

import { StationsContext } from '../../context/StationsContext';
import Button from '../Button/Button';
import ModalDefault from '../Modal/Modal';
import styles from './BottomBar.module.scss';
import { AddNewStationForm } from '../AddNewStationForm/AddNewStationForm';

export const BottomBar = () => {
  const { setModalIsOpen } = useContext(StationsContext);

  return (
    <div className={styles.bottomBar}>
      <Button
        onClick={() => {
          setModalIsOpen(true);
        }}
      >
        {'Add new radio station'}
      </Button>

      <ModalDefault buttonName="Add">
        <AddNewStationForm />
      </ModalDefault>
    </div>
  );
};
