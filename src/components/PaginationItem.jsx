import React from 'react';
import Button from './Button';
import styles from './Pagination.module.scss';
import cx from 'classnames';

export const PaginationItem = ({
  onPageChange,
  page,
  activePageIDState,
  isActive,
}) => {
  const activePage = activePageIDState === page ? styles.active : styles.page;

  return (
    isActive && (
      <li className={cx(styles.pages)} key={page}>
        <Button
          onClick={() => {
            onPageChange(page);
          }}
        >
          <span className={activePage}>{page}</span>
        </Button>
      </li>
    )
  );
};
