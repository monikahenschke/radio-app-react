export function getListItemsOnCurrentPage(
  activePageID,
  listOfItems,
  itemsPerPage
) {
  const positionOfFirstItemOnPage = (activePageID - 1) * itemsPerPage;
  const positionOfLastItemOnPage = positionOfFirstItemOnPage + itemsPerPage;

  return listOfItems.slice(positionOfFirstItemOnPage, positionOfLastItemOnPage);
}
