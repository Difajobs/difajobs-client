import { Box } from "@mui/material";
import { DashboardContainer } from "../../containers";
import styles from './DashboardPage.module.scss'
import { Footer, NavBar } from "../../layouts";
import AuthChecker from "../../utils/authChecker";

export default function DashboardPage() {
  return (
    <>
      <AuthChecker />
      <Box className={styles.dashboardPage}>
        <NavBar />
        <DashboardContainer />
        <Footer />
      </Box>
    </>
  )
}