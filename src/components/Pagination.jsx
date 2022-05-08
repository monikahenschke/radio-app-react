import React from 'react';
import { useMemo, useEffect, useState } from 'react';
import { array, func } from 'prop-types';

import styles from './Pagination.module.scss';
import { PaginationItem } from './PaginationItem';
import { calculateNumbersOfPages } from '../utils/calculateNumbersOfPages';

import { ReactComponent as Leftarrow } from '../images/leftarrow.svg';
import { ReactComponent as Rightarrow } from '../images/rightarrow.svg';
import Button from './Button';
import { number } from 'prop-types';

export const Pagination = ({
  itemsPerPage,
  listOfItems,
  setCurrentPageItems,
}) => {
  const [currentPageState, setCurrentPageState] = useState(1);

  const totalPages = useMemo(() => {
    return calculateTotalPages(listOfItems);

    function calculateTotalPages(list) {
      if (list.length > 0) {
        const totalPages = Math.ceil(list.length / itemsPerPage);
        return totalPages;
      }
    }
  }, [itemsPerPage, listOfItems]);

  useEffect(() => {
    const itemsListOnCurrentPage = getListItemsOnCurrentPage(currentPageState);
    setCurrentPageItems(itemsListOnCurrentPage);

    function getListItemsOnCurrentPage(activePageIDState) {
      const positionOfFirstItemOnPage = (activePageIDState - 1) * itemsPerPage;
      const positionOLastItemOnPage = positionOfFirstItemOnPage + itemsPerPage;

      return listOfItems.slice(
        positionOfFirstItemOnPage,
        positionOLastItemOnPage
      );
    }
  }, [currentPageState, itemsPerPage, setCurrentPageItems, listOfItems]);

  const nextButtonDisabled = useMemo(
    () => totalPages === currentPageState,
    [totalPages, currentPageState]
  );
  const prevButtonDisabled = useMemo(
    () => currentPageState === 1,
    [currentPageState]
  );

  function onPageChange(pageNumber) {
    if (!pageNumber) {
      throw new Error('Missing number of page!');
    }
    setCurrentPageState(pageNumber);
  }

  function onPrevArrowChange() {
    setCurrentPageState(currentPageState - 1);
  }

  function onNextArrowChange() {
    setCurrentPageState(currentPageState + 1);
  }

  const createPagesNumbers = useMemo(() => {
    return calculateNumbersOfPages(totalPages, currentPageState);
  }, [totalPages, currentPageState]);

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
        {createPagesNumbers.map(({ pageNumber, isActive }, i) => {
          return pageNumber ? (
            <PaginationItem
              page={pageNumber}
              onPageChange={() => onPageChange(pageNumber)}
              isActive={isActive}
              key={i}
              activePageIDState={currentPageState}
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
  setCurrentPageItems: func.isRequired,
  itemsPerPage: number.isRequired,
};
