import { Box } from "@mui/material";
import { DashboardContainer } from "../../containers";
import styles from './DashboardPage.module.scss'
import { NavBar } from "../../layouts";

export default function DashboardPage() {
  return (
    <>
      <Box className={styles.dashboardPage}>
        <NavBar />
        <DashboardContainer />
      </Box>
    </>
  )
}