import React from "react";
import { Box, Grid, Skeleton } from "@mui/material";
import styles from './DashboardSkeleton.module.scss'

const DashboardSkeleton: React.FC = () => {
  return (
    <>
      <Box className={styles.container}>
        <Grid container spacing={1} className={styles.grid}>
          {[1, 2, 3, 4, 5].map((index) => (
            <Skeleton key={index} className={styles.skeleton} />
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default DashboardSkeleton;
