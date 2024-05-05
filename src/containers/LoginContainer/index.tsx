import { Box, Typography } from "@mui/material";
import styles from './LoginContainer.module.scss';
import LoginForm from "../../components/LoginForm";

export default function LoginContainer() {
  return (
    <>
      <Box className={styles.loginContainer}>
        <Box className={styles.logoBox}>
          <Typography className={styles.logoText}>DIFA JOBS</Typography>
        </Box>
        <Box className={styles.formContainer}>
          <LoginForm />
        </Box>
      </Box>
    </>
  );
}
