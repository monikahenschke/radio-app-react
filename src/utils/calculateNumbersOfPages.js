export function calculateNumbersOfPages(totalPages, currentPageState) {
  // Creates a range of numbered pages
  const createRange = (from, to) => {
    const listOfPagesInRange = [];
    for (var page = from; page <= to; page++) {
      const singlePageInRange = {
        isActive: page === currentPageState,
        pageNumber: page,
      };
      listOfPagesInRange.push(singlePageInRange);
    }
    return listOfPagesInRange;
  };
  // Creates an empty pagination item with no page number
  const createEmptyItem = () => ({ isActive: false, pageNumber: null });

  //1,2,3,4,5
  if (totalPages < 6) {
    return createRange(1, totalPages);
  }

  // e.g. currentPage is 8, totalPages = 10
  if (totalPages > 5 && currentPageState === totalPages - 2) {
    return [
      ...createRange(1, 2),
      createEmptyItem(),
      ...createRange(currentPageState - 1, totalPages),
    ];
  }

  // condition for two last numbers od pages
  if (totalPages > 5 && currentPageState >= totalPages - 1) {
    return [
      ...createRange(1, 2),
      createEmptyItem(),
      ...createRange(currentPageState - 1, totalPages),
    ];
  }

  // totalPages number is larger than 6
  if (totalPages > 5) {
    if (currentPageState <= 3) {
      return [
        ...createRange(1, currentPageState + 1),
        createEmptyItem(),
        ...createRange(totalPages - 1, totalPages),
      ];
    }
    if (currentPageState > 3) {
      return [
        ...createRange(1, 2),
        createEmptyItem(),
        ...createRange(currentPageState - 1, currentPageState + 1),
        createEmptyItem(),
        ...createRange(totalPages - 1, totalPages),
      ];
    }
  }

  //
}
