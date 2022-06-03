import { useContext } from 'react';

import { StationsContext } from '../../context/StationsContext';
import Button from '../Button/Button';
import ModalDefault from '../Modal/Modal';
import styles from './BottomBar.module.scss';
import { AddNewStationForm } from '../AddNewStationForm/AddNewStationForm';

export const BottomBar = () => {
  const { setIsModalOpen } = useContext(StationsContext);

  return (
    <div className={styles.bottomBar}>
      <Button onClick={() => setIsModalOpen(true)}>
        {'Add new radio station'}
      </Button>

      <ModalDefault buttonName="Add">
        <AddNewStationForm />
      </ModalDefault>
    </div>
  );
};
