import { Box, Divider } from "@mui/material"
import styles from './DashboardContainer.module.scss'
import { JobListComponent, JobSearchBox, ProfileDashboard } from "../../components"

export default function DashboardContainer() {
  return (
    <>
      <Box className={styles.dashboardContainer}>
        <ProfileDashboard />
        <Divider className={styles.divider}/>
        <JobSearchBox />
        <JobListComponent />
      </Box>
    </>
  )
}