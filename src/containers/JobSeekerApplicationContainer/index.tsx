import { Box } from "@mui/material";
import styles from './JobSeekerApplicationContainer.module.scss'
import JobSeekerApplicationComponent from "../../components/JobSeekerApplicationComponent";

export default function JobSeekerApplicationContainer() {
  return (
    <Box className={styles.container}>
      <JobSeekerApplicationComponent />
    </Box>
  )
}
