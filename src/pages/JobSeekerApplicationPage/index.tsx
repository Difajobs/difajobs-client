import { Box } from "@mui/material";
import { JobSeekerApplicationContainer } from "../../containers";
import styles from './JobSeekerApplicationPage.module.scss'
import { Footer, NavBar } from "../../layouts";

export default function index() {
  return (
    <Box className={styles.container}>
      <NavBar />
      <JobSeekerApplicationContainer />
      <Footer />
    </Box>
  )
}
