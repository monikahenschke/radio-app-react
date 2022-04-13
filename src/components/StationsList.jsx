import React from 'react';
import ReactPaginate from 'react-paginate';
import { useState, useEffect } from 'react';

import styles from './StationsList.module.scss';
import '../styles/ReactPaginate.scss';
import { ReactComponent as Leftarrow } from '../images/leftarrow.svg';
import { ReactComponent as Rightarrow } from '../images/rightarrow.svg';

export const StationsList = ({
  handleSelect,
  children,
  itemsPerPage,
  ...props
}) => {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    React.Children.toArray(children);
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);

    setCurrentItems(children.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(children.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, children]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % children.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <ul data-testid="stationsList" className={styles.stationsList}>
        {currentItems &&
          Object.values(currentItems).map((child, i) => (
            <li className="station" key={i}>
              {child}
            </li>
          ))}
      </ul>
      <nav
        role="navigation"
        aria-label="Pagination Navigation"
        className="paginate"
      >
        <ReactPaginate
          breakLabel="..."
          nextLabel={<Rightarrow />}
          nextLinkClassName="next"
          nextClassName="liNext"
          onPageChange={handlePageClick}
          marginPagesDisplayed={1}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel={<Leftarrow />}
          previousLinkClassName="previous"
          previousClassName="liPrevious"
          pageLinkClassName="pages"
          renderOnZeroPageCount={null}
          activeClassName="activePage"
        />
      </nav>
    </>
  );
};

StationsList.whyDidYouRender = true;
export default StationsList;
