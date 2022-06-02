import React, { useRef, useEffect, useContext } from 'react';
import FocusTrap from 'focus-trap-react';
import ReactDom from 'react-dom';

import styles from './Modal.module.scss';
import { StationsContext } from '../../context/StationsContext';

const ModalDefault = ({ children }) => {
  const portal = useRef(document.createElement('div'));
  const { isModalOpen } = useContext(StationsContext);

  useEffect(() => {
    const divPortal = portal.current;
    document.body.appendChild(divPortal);
    divPortal.classList.add('Modal');

    return () => {
      divPortal.parentNode.removeChild(divPortal);
    };
  }, []);

  if (!isModalOpen) return null;

  return ReactDom.createPortal(
    <FocusTrap>
      <div className={styles.overlay}>
        <div className={styles.content}>{children}</div>
      </div>
    </FocusTrap>,
    portal.current
  );
};

export default ModalDefault;
