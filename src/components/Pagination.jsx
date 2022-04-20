import React from 'react';
import { useMemo, useEffect } from 'react';
import { array, func } from 'prop-types';

import styles from './Pagination.module.scss';

import { ReactComponent as Leftarrow } from '../images/leftarrow.svg';
import { ReactComponent as Rightarrow } from '../images/rightarrow.svg';
import Button from './Button';
import { number } from 'prop-types';

export const Pagination = ({
  itemsPerPage,
  listOfItem,
  activePageIDState,
  setActivePageIDState,
  setItemsListCurrentlyShownState,
}) => {
  const totalPages = useMemo(() => {
    return calculateNumberOfPages(listOfItem);

    function calculateNumberOfPages(list) {
      if (list.length > 0) {
        const totalPages = Math.ceil(list.length / itemsPerPage);
        return totalPages;
      }
    }
  }, [itemsPerPage, listOfItem]);

  const pagesNumbers = useMemo(() => {
    // return Array.from(Array(totalPages + 1).keys()).slice(1);

    const numbersOfPages = [];
    for (let i = 1; i <= totalPages; i++) {
      numbersOfPages.push(i);
    }
    return numbersOfPages;
  }, [totalPages]);

  useEffect(() => {
    const itemsListOnCurrentPage = getListItemsOnCurrentPage(activePageIDState);
    setItemsListCurrentlyShownState(itemsListOnCurrentPage);

    function getListItemsOnCurrentPage(activePageIDState) {
      const positionOfFirstItemOnPage = (activePageIDState - 1) * itemsPerPage;
      const positionOLastItemOnPage = positionOfFirstItemOnPage + itemsPerPage;

      return listOfItem.slice(
        positionOfFirstItemOnPage,
        positionOLastItemOnPage
      );
    }
  }, [
    activePageIDState,
    itemsPerPage,
    setItemsListCurrentlyShownState,
    listOfItem,
  ]);

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

  return (
    <nav className={styles.paginationContainer}>
      <ul className={styles.pagination}>
        <li className={styles.prev} key="prev">
          <Button
            iconOnly={true}
            icon={Leftarrow}
            onClick={onPrevArrowChange}
            disabled={prevButtonDisabled}
          >
            Previous
          </Button>
        </li>
        {pagesNumbers.map((number) => {
          const activePage = activePageIDState === number ? styles.active : '';
          return (
            <li className={styles.pages} key={number}>
              <Button
                onClick={() => {
                  onPageChange(number);
                }}
              >
                <span className={activePage}>{number}</span>
              </Button>
            </li>
          );
        })}
        <li className={styles.next} key="Next">
          <Button
            iconOnly={true}
            icon={Rightarrow}
            onClick={onNextArrowChange}
            disabled={nextButtonDisabled}
          >
            Next
          </Button>
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  listOfItem: array.isRequired,
  activePageIDState: number.isRequired,
  setActivePageIDState: func.isRequired,
  setStationsListCurrentlyShownState: func.isRequired,
  itemsPerPage: number.isRequired,
};
