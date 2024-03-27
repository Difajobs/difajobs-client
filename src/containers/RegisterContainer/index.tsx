import { Box, Typography } from "@mui/material";
// import { Link } from "react-router-dom"; // Import Link from react-router-dom with a different name to avoid conflict
import styles from "./RegisterContainer.module.scss";
// import difaJobsLogo from "../../assets/images/difajobs-dark.webp";
// import googleLogo from "../../assets/images/google.svg";
import RegisterForm from "../../components/RegisterForm";

export default function RegisterContainer() {
  return (
    <>
      <Box className={`${styles.registerContainer} ${styles.loginBox}`}>
        <Box className={styles.logoBox}>
          <Typography className={styles.logoText}>Difa Jobs</Typography>
        </Box>
        <RegisterForm />
      </Box>
    </>
  );
}
