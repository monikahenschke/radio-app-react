import { render, screen, fireEvent } from '@testing-library/react';
import { Pagination } from './Pagination';
import { calculateNumbersOfPages } from '../utils/calculateNumbersOfPages';

const itemsArray = [
  {
    id: 1,
    name: 'Cat County 98.1',
    link: 'http://17573.live.streamtheworld.com/WCTKFMAAC.aac',
  },
  {
    id: 2,
    name: "America's Country",
    link: 'https://ais-sa2.cdnstream1.com/1976_128.mp3',
  },
  {
    id: 3,
    name: 'KTWB Big Country 92.5',
    link: 'https://14083.live.streamtheworld.com/KTWBFMAAC.aac',
  },
  {
    id: 4,
    name: 'Country 108',
    link: 'http://icepool.silvacast.com/COUNTRY108.mp3',
  },
  {
    id: 5,
    name: "Kickin' Country 181.fm",
    link: 'https://listen.181fm.com/181-kickincountry_128k.mp3',
  },
  {
    id: 6,
    name: 'Cat County 98.1',
    link: 'http://17573.live.streamtheworld.com/WCTKFMAAC.aac',
  },
  {
    id: 7,
    name: "America's Country",
    link: 'https://ais-sa2.cdnstream1.com/1976_128.mp3',
  },
  {
    id: 8,
    name: 'KTWB Big Country 92.5',
    link: 'https://14083.live.streamtheworld.com/KTWBFMAAC.aac',
  },
  {
    id: 9,
    name: 'Country 108',
    link: 'http://icepool.silvacast.com/COUNTRY108.mp3',
  },
  {
    id: 10,
    name: "Kickin' Country 181.fm",
    link: 'https://listen.181fm.com/181-kickincountry_128k.mp3',
  },
];

describe('Pagination component', () => {
  test('should display all pages when total pages is smaller than 6', () => {
    const fnMock = jest.fn();
    render(
      <Pagination
        itemsPerPage={2}
        listOfItems={itemsArray}
        setCurrentPageItems={fnMock}
      />
    );
    const pages = screen.getAllByTestId('testPaginationItem');
    expect(pages.length === 5).toBeTruthy();
    // if itemsPerPage = 2 and itemasArray length = 10, total pages should be 5
  });
  test('should display pages 1,2 ..5,6 when total pages is greater than 6 and current page is equal 1', () => {
    const fnMock = jest.fn();
    render(
      <Pagination
        itemsPerPage={1}
        listOfItems={itemsArray}
        setCurrentPageItems={fnMock}
      />
    );
    const pages = screen.getAllByTestId('testPaginationItem');
    expect(pages.length === 4).toBeTruthy();
  });
  test('is able to change current page to page clicked', () => {
    const fnMock = jest.fn();
    render(
      <Pagination
        itemsPerPage={2}
        listOfItems={itemsArray}
        setCurrentPageItems={fnMock}
      />
    );
    const secondPage = screen.getByRole('button', {
      current: false,
      name: /2/i,
    });

    fireEvent.click(secondPage);

    expect(
      screen.getByRole('button', { current: true, name: /2/i })
    ).toBeTruthy();
  });
  test('is accessible - it contains aria-label', () => {
    const fnMock = jest.fn();
    render(
      <Pagination
        itemsPerPage={2}
        listOfItems={itemsArray}
        setCurrentPageItems={fnMock}
      />
    );
    const buttons = screen.getAllByRole('button', { name: /Page/i });
    expect(buttons.length).toBe(7);
    // if itemsPerPage = 2, it should be 5 (Page X) + 2 (Previous/Next Page).
  });
  test('calls function when you click on arrow', () => {
    const fnMock = jest.fn();
    render(
      <Pagination
        itemsPerPage={1}
        listOfItems={itemsArray}
        setCurrentPageItems={fnMock}
      />
    );

    const nextButton = screen.getByRole('button', { name: 'Next Page' });
    const pagesBeforeClick = screen.getAllByTestId('testPaginationItem');
    // pages before click are 1,2 .. 5, 6
    expect(pagesBeforeClick.length === 4).toBeTruthy();
    fireEvent.click(nextButton);
    const pagesAfterClick = screen.getAllByTestId('testPaginationItem');
    // pages after click are 1,2,3,4,5,6
    expect(pagesAfterClick.length === 5).toBeTruthy();
  });
});

describe('Function calculateNumbersOfPages', () => {
  test('should returns list of pages with dots', () => {
    const totalPagesMock = 100;
    const currentPageStateMock = 1;

    const result = calculateNumbersOfPages(
      totalPagesMock,
      currentPageStateMock
    );

    expect(result[2].pageNumber).toBeNull();
    expect(result[3].pageNumber).toBe(99);
  });
  test('should returns all 5 pages', () => {
    const totalPagesMock = 5;
    const currentPageStateMock = 1;

    const result = calculateNumbersOfPages(
      totalPagesMock,
      currentPageStateMock
    );

    expect(result[1].pageNumber).toBe(2);
    expect(result[2].pageNumber).toBe(3);
    expect(result[3].pageNumber).toBe(4);
  });
  test('should returns list of 6', () => {
    const totalPagesMock = 6;
    const currentPageStateMock = 5;
    const result = calculateNumbersOfPages(
      totalPagesMock,
      currentPageStateMock
    );
    expect(result[2].pageNumber).toBe(null);
  });
  test('should returns list of 7', () => {
    const totalPagesMock = 7;
    const currentPageStateMock = 3;
    const result = calculateNumbersOfPages(
      totalPagesMock,
      currentPageStateMock
    );
    expect(result[2].isActive).toBe(true);
  });
  test('should returns list of 20 with current page 12', () => {
    const totalPagesMock = 20;
    const currentPageStateMock = 12;
    const result = calculateNumbersOfPages(
      totalPagesMock,
      currentPageStateMock
    );
    expect(result[4].isActive).toBe(true);
  });
});
test('should returns list of 99 with current page 97', () => {
  const totalPagesMock = 99;
  const currentPageStateMock = 97;
  const result = calculateNumbersOfPages(totalPagesMock, currentPageStateMock);
  expect(result[4].isActive).toBe(true);
  expect(result[2].pageNumber).toBe(null);
});
test('should returns list of 99 with current page 98', () => {
  const totalPagesMock = 99;
  const currentPageStateMock = 98;
  const result = calculateNumbersOfPages(totalPagesMock, currentPageStateMock);
  expect(result[4].isActive).toBe(true);
  expect(result[3].pageNumber).toBe(97);
  expect(result[2].pageNumber).toBe(null);
});

test('should returns list of 14 with current page 13', () => {
  const totalPagesMock = 14;
  const currentPageStateMock = 13;
  const result = calculateNumbersOfPages(totalPagesMock, currentPageStateMock);
  expect(result[4].isActive).toBe(true);
});
