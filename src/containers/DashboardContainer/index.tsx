import React from "react";
import {
  JobListComponent,
  JobSearchBox,
  // ProfileDashboard,
} from "../../components";
import { Box, Divider } from "@mui/material";
import styles from "./DashboardContainer.module.scss";

const JobListContainer: React.FC = () => {
  return (
    <>
      <Box className={styles.dashboardContainer}>
        {/* <ProfileDashboard /> */}
        <Divider className={styles.divider} />
        <JobSearchBox />
        <JobListComponent />
      </Box>
    </>
  );
};

export default JobListContainer;
