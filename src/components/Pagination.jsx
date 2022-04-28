import React from 'react';
import { useMemo, useEffect, useState } from 'react';
import { array, func } from 'prop-types';

import styles from './Pagination.module.scss';
import { PaginationItem } from './PaginationItem';

import { ReactComponent as Leftarrow } from '../images/leftarrow.svg';
import { ReactComponent as Rightarrow } from '../images/rightarrow.svg';
import Button from './Button';
import { number } from 'prop-types';

export const Pagination = ({
  itemsPerPage,
  listOfItems,
  setCurrentPageItems,
}) => {
  const [activePageIDState, setActivePageIDState] = useState(1);

  const totalPages = useMemo(() => {
    return calculateNumberOfPages(listOfItems);

    function calculateNumberOfPages(list) {
      if (list.length > 0) {
        const totalPages = Math.ceil(list.length / itemsPerPage);
        return totalPages;
      }
    }
  }, [itemsPerPage, listOfItems]);

  useEffect(() => {
    const itemsListOnCurrentPage = getListItemsOnCurrentPage(activePageIDState);
    setCurrentPageItems(itemsListOnCurrentPage);

    function getListItemsOnCurrentPage(activePageIDState) {
      const positionOfFirstItemOnPage = (activePageIDState - 1) * itemsPerPage;
      const positionOLastItemOnPage = positionOfFirstItemOnPage + itemsPerPage;

      return listOfItems.slice(
        positionOfFirstItemOnPage,
        positionOLastItemOnPage
      );
    }
  }, [activePageIDState, itemsPerPage, setCurrentPageItems, listOfItems]);

  const nextButtonDisabled = useMemo(
    () => totalPages === activePageIDState,
    [totalPages, activePageIDState]
  );
  const prevButtonDisabled = useMemo(
    () => activePageIDState === 1,
    [activePageIDState]
  );

  function onPageChange(pageNumber) {
    if (!pageNumber) {
      throw new Error('Missing number of page!');
    }
    setActivePageIDState(pageNumber);
  }

  function onPrevArrowChange() {
    setActivePageIDState(activePageIDState - 1);
  }

  function onNextArrowChange() {
    setActivePageIDState(activePageIDState + 1);
  }

  const createPagesNumbers = useMemo(() => {
    // return Array.from(Array(totalPages + 1).keys()).slice(1);
    const numbersOfPages = [];
    for (let i = 1; i <= totalPages; i++) {
      let page;
      let isActive;

      if (totalPages < 6) {
        isActive = true;
        page = {
          pageNumber: i,
          isActive: isActive,
        };
      } else {
        if (
          (((activePageIDState === 1 && i > 2) ||
            (activePageIDState < 4 && i >= 5) ||
            (activePageIDState === 4 && i >= 6) ||
            (activePageIDState >= 5 &&
              activePageIDState < 9 &&
              i > 2 &&
              (i < activePageIDState - 1 || i > activePageIDState + 1))) &&
            i < totalPages - 1) ||
          (activePageIDState >= 9 && i > 2 && i < activePageIDState - 1)
        ) {
          isActive = false;
          page = {
            pageNumber: i,
            isActive: isActive,
          };
        } else {
          isActive = true;
          page = {
            pageNumber: i,
            isActive: isActive,
          };
        }
      }

      numbersOfPages.push(page);
    }
    return numbersOfPages;
  }, [totalPages, activePageIDState]);

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
          let drawDots = !isActive && createPagesNumbers[i - 1]?.isActive;

          return !drawDots ? (
            <PaginationItem
              page={pageNumber}
              onPageChange={() => onPageChange(pageNumber)}
              isActive={isActive}
              key={i}
              activePageIDState={activePageIDState}
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
