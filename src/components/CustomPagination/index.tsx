import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box } from '@mui/material';
import styles from './CustomPagination.module.scss'

interface PaginationProps {
  dataLength: number;
  itemsPerPage: number;
  render: (startIndex: number, endIndex: number) => React.ReactNode;
}

const PaginationLogic: React.FC<PaginationProps> = ({ dataLength, itemsPerPage, render }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleChangePage = (_event: React.ChangeEvent<unknown>, newPage: number) => {
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <>
      <Box className={styles.pagination}>
        {render(startIndex, endIndex)}
        <Pagination
          count={Math.ceil(dataLength / itemsPerPage)}
          page={currentPage}
          onChange={handleChangePage}
        />
      </Box>
    </>
  );
};

export default PaginationLogic;
