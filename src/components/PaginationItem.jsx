import React from 'react';
import Button from './Button';
import styles from './Pagination.module.scss';
import cx from 'classnames';

export const PaginationItem = ({
  onPageChange,
  page,
  activePageID,
  isActive,
}) => {
  const pageClass = activePageID === page ? styles.active : styles.page;
  const isCurrentPage = activePageID === page ?? true;
  const ariaLabel = 'Page ' + page;

  return (
    <li
      data-testid="testPaginationItem"
      className={cx(styles.pages)}
      key={page}
    >
      <Button
        aria-current={isCurrentPage}
        aria-label={ariaLabel}
        onClick={() => {
          onPageChange(page);
        }}
      >
        <span className={pageClass}>{page}</span>
      </Button>
    </li>
  );
};
