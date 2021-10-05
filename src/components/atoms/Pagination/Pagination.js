import React from 'react';
import Wrapper from './Pagination.styles';

const Pagination = ({ rowsPerPage, rows, paginate }) => {
  const pageNumber = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= Math.ceil(rows / rowsPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <Wrapper>
      <nav>
        <ul>
          {pageNumber.map((number) => (
            <li key={number}>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a onClick={(e) => paginate(e, number)} href="!#">
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </Wrapper>
  );
};

export default Pagination;
