import { Box, Typography } from "@mui/material";
import styles from "./RegisterContainer.module.scss";
import difaJobsLogo from "../../assets/images/difajobs-dark.webp";
import GoogleRegisterForm from "../../components/GoogleRegisterForm";

export default function GoogleRegisterContainer() {
  return (
    <>
      <Box className={`${styles.registerContainer} ${styles.registerBox}`}>
        <Box className={styles.logoBox}>
          <Typography className={styles.logoText}>Difa Jobs</Typography>
        </Box>
        <Box className={styles.formContainer}>
          <img
            src={difaJobsLogo}
            alt="Difa Jobs Logo"
            className={styles.difaJobsLogo}
          />
          <GoogleRegisterForm />
        </Box>
      </Box>
    </>
  );
}
