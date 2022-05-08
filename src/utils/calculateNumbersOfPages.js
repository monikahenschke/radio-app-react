//  1 = 1, 2, ... 11, 12
// 2 = 1, 2, 3, 4, ..., 11, 12
// 3 = 1, 2, 3, 4, ..., 11, 12
// 4 = 1, 2, 3, 4, 5, ..., 11, 12
// 5 = 1, 2, ..., 4, 5, 6, ..., 11, 12
// ...
// 9 = 1, 2, ..., 8, 9, 10, 11, 12
// 10 = 1, 2, ..., 9, 10, 11, 12
// 11 = 1, 2, ..., 10, 11, 12
// 12 = 1, 2, ..., 11, 12
// 99 = 1, 2, ..., 98,99,100
//100 = 1,2, ... 99, 100

export function calculateNumbersOfPages(totalPages, currentPageState) {
  const numbersOfPages = [];
  for (let i = 1; i <= totalPages; i++) {
    const currentPage = {
      pageNumber: null,
      isActive: false,
    };
    let doPush = true;

    if (totalPages < 6) {
      currentPage.pageNumber = i;
      currentPage.isActive = true;
    } else {
      if (
        (((currentPageState === 1 && i > 2) ||
          (currentPageState < 4 && i >= 5) ||
          (currentPageState === 4 && i >= 6) ||
          (currentPageState >= 5 &&
            currentPageState < 9 &&
            i > 2 &&
            (i < currentPageState - 1 || i > currentPageState + 1))) &&
          i < totalPages - 1) ||
        (currentPageState >= 9 && i > 2 && i < currentPageState - 1)
      ) {
        const previousPage = numbersOfPages[numbersOfPages.length - 1];
        doPush = !previousPage || previousPage.isActive;

        currentPage.pageNumber = null;
        currentPage.isActive = false;
      } else {
        currentPage.pageNumber = i;
        currentPage.isActive = true;
      }
    }

    if (doPush) {
      numbersOfPages.push(currentPage);
    }
  }
  return numbersOfPages;
}
