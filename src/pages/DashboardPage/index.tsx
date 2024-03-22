import { Box } from "@mui/material";
import { DashboardContainer } from "../../containers";
import styles from './DashboardPage.module.scss'

export default function DashboardPage() {
  return (
    <>
      <Box className={styles.dashboardPage}>
        <DashboardContainer />
      </Box>
    </>
  )
}