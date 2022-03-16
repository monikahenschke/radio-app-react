import React, { useRef, useEffect } from 'react';
import FocusTrap from 'focus-trap-react';
import ReactDom from 'react-dom';
import Button from './Button';
import styles from './Modal.module.scss';

const ModalDefault = ({ children, isModalOpen, setModalIsOpen }) => {
  const portal = useRef(document.createElement('div'));

  useEffect(() => {
    document.body.appendChild(portal.current);
    portal.current.classList.add('Modal');

    return () => {
      portal.current.parentNode.removeChild(portal.current);
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
