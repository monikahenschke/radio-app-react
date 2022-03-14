import { useState } from 'react';
import styles from './Layout.module.scss';
import ModalDefault from './Modal';
import Button from '../components/Button';

export const Layout = ({ children }) => {
  const [isModalOpen, setModalIsOpen] = useState(false);
  const radioStationsAddingContentModal = (
    <div className="sd">
      <input type="text"></input>
      <p>Add new radio station</p>
    </div>
  );

  return (
    <div data-testid="layout" className={styles.Layout}>
      <div className={styles.topBar}>Currently playing</div>
      <div className={styles.content}>{children}</div>
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
    </div>
  );
};
