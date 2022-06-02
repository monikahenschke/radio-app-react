import React, { useCallback } from 'react';
import { useMemo, useEffect, useState } from 'react';
import { array, func } from 'prop-types';

import styles from './Pagination.module.scss';
import { PaginationItem } from './PaginationItem';
import { calculateNumbersOfPages } from '../../utils/calculateNumbersOfPages';
import { getListItemsOnCurrentPage } from '../../utils/getListItemsOnCurrentPage';

import { ReactComponent as Leftarrow } from '../../images/leftarrow.svg';
import { ReactComponent as Rightarrow } from '../../images/rightarrow.svg';
import Button from '../Button/Button';
import { number } from 'prop-types';

export const Pagination = ({
  itemsPerPage,
  listOfItems,
  setItemsListCurrentlyShown,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = useMemo(() => {
    const totalPages = Math.ceil(listOfItems.length / itemsPerPage);
    return totalPages;
  }, [itemsPerPage, listOfItems]);

  useEffect(() => {
    const itemsListOnCurrentPage = getListItemsOnCurrentPage(
      currentPage,
      listOfItems,
      itemsPerPage
    );
    setItemsListCurrentlyShown(itemsListOnCurrentPage);
  }, [currentPage, itemsPerPage, setItemsListCurrentlyShown, listOfItems]);

  const nextButtonDisabled = useMemo(
    () => totalPages === currentPage,
    [totalPages, currentPage]
  );
  const prevButtonDisabled = useMemo(() => currentPage === 1, [currentPage]);

  const onPageChange = useCallback((pageNumber) => {
    if (!pageNumber) {
      throw new Error('Missing number of page!');
    }
    return setCurrentPage(pageNumber);
  }, []);

  function onPrevArrowChange() {
    setCurrentPage((previousCurrentPage) => previousCurrentPage - 1);
  }

  function onNextArrowChange() {
    setCurrentPage((previousCurrentPage) => previousCurrentPage + 1);
  }

  const numbersOfPages = useMemo(() => {
    return calculateNumbersOfPages(totalPages, currentPage);
  }, [totalPages, currentPage]);

  return (
    <nav className={styles.paginationContainer}>
      <ul className={styles.pagination}>
        <li className={styles.prev} key="prev">
          <Button
            iconOnly={true}
            icon={Leftarrow}
            onClick={onPrevArrowChange}
            disabled={prevButtonDisabled}
            aria-label="Previous Page"
          >
            Previous
          </Button>
        </li>
        {numbersOfPages.map(({ pageNumber, isActive }, i) => {
          return pageNumber ? (
            <PaginationItem
              page={pageNumber}
              onPageChange={() => onPageChange(pageNumber)}
              isActive={isActive}
              key={i}
              activePageID={currentPage}
            />
          ) : (
            <span className={styles.dots} key={i}>
              ...
            </span>
          );
        })}

        <li className={styles.next} key="Next">
          <Button
            iconOnly={true}
            icon={Rightarrow}
            onClick={onNextArrowChange}
            disabled={nextButtonDisabled}
            aria-label="Next Page"
          >
            Next
          </Button>
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  listOfItems: array.isRequired,
  setItemsListCurrentlyShown: func.isRequired,
  itemsPerPage: number.isRequired,
};
