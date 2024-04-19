import React from 'react';
import dummyData from '../../components/JobList/dummyData';
import { CustomPagination, JobListComponent, JobSearchBox, ProfileDashboard } from '../../components';
import { Box, Divider } from '@mui/material';
import styles from './DashboardContainer.module.scss'

const JobListContainer: React.FC = () => {
  const itemsPerPage = 5; // Change this value to adjust the number of items per page

  return (
    <>
      <Box className={styles.dashboardContainer}>
        <ProfileDashboard />
        <Divider className={styles.divider} />
        <JobSearchBox />
        <CustomPagination
          dataLength={dummyData.length}
          itemsPerPage={itemsPerPage}
          render={(startIndex, endIndex) => (
            <JobListComponent startIndex={startIndex} endIndex={endIndex} />
          )}
        />
      </Box>
    </>
  );
};

export default JobListContainer;
