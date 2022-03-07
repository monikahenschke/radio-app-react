import React, { useState, useRef, useEffect } from 'react';
import ReactDom from 'react-dom';
import Button from './Button';
import styles from './Modal.module.scss';
const modalRoot = document.getElementById('portal');

const ModalDefault = ({ children, modalIsOpen, setModalIsOpen, ...props }) => {
  const modalRef = useRef(null);
  const closeModalButtonRef = useRef(null);

  useEffect(() => {
    if (modalIsOpen) {
      closeModalButtonRef.current.focus();

      modalRef.current.addEventListener('transitionend', () => {
        closeModalButtonRef.current.focus();
      });
    }
  }, [modalIsOpen]);
  if (!modalIsOpen) return null;

  return ReactDom.createPortal(
    <div className={styles.ModalOverlay}>
      <div className={styles.Modal} ref={modalRef}>
        <h3>Hello!</h3>
        {children}
        <Button
          innerRef={closeModalButtonRef}
          children={<p>Okay</p>}
          onClick={() => setModalIsOpen(false)}
        />

        <Button children={<p>Check</p>} onClick={() => {}} />
      </div>
    </div>,
    modalRoot
  );
};

export default ModalDefault;
