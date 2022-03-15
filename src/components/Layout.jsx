import { useState } from 'react';
import styles from './Layout.module.scss';
import ModalDefault from './Modal';
import Button from '../components/Button';
import { ReactComponent as playLargeIcon } from '../images/play-large.svg';

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
      <div className={styles.topBar}>
        <div className={styles.topBarContainer}>
          <p className={styles.topBarHeadline}>currently playing:</p>
          <p className={styles.topBarStationsName}>Station's name</p>
        </div>
        <Button
          size="big"
          iconOnly={true}
          icon={playLargeIcon}
          onClick={() => {}}
        >
          Play!
        </Button>
      </div>
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
