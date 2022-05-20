export function getListItemsOnCurrentPage(
  activePageID,
  listOfItems,
  itemsPerPage
) {
  const positionOfFirstItemOnPage = (activePageID - 1) * itemsPerPage;
  const positionOLastItemOnPage = positionOfFirstItemOnPage + itemsPerPage;

  return listOfItems.slice(positionOfFirstItemOnPage, positionOLastItemOnPage);
}
