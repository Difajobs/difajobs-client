import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom with a different name to avoid conflict
import styles from './LoginContainer.module.scss';
import difaJobsLogo from '../../assets/images/difajobs-dark.webp'
import googleLogo from '../../assets/images/google.svg';

export default function LoginContainer() {
  return (
    <>
      <Box className={`${styles.loginContainer} ${styles.loginBox}`}>
        <Box className={styles.logoBox}>
          <Typography className={styles.logoText}>
            Difa Jobs
          </Typography>
        </Box>
        <Box className={styles.formContainer}>
          <img src={difaJobsLogo} alt="Difa Jobs Logo" className={styles.difaJobsLogo} />
          <Box className={styles.inputBox}>
            <Typography className={styles.inputLabel}>
              Email
            </Typography>
            <TextField
              className={styles.inputField}
              variant="outlined"
              InputProps={{ style: { borderRadius: '20px', height: '52px' } }}
            />
          </Box>
          <Box className={styles.inputBox}>
            <Typography className={styles.inputLabel}>
              Password
            </Typography>
            <TextField
              className={styles.inputField}
              variant="outlined"
              InputProps={{ style: { borderRadius: '20px', height: '52px' } }}
            />
          </Box>
          <Box className={styles.buttonBox}>
            <Button className={styles.button}>
              Masuk
            </Button>
            <Divider className={styles.divider} />
            <Button className={styles.googleButton}>
              <img src={googleLogo} alt="Google Logo" className={styles.googleLogo} />
              <Typography className={styles.googleText}>
                Masuk dengan Google
              </Typography>
            </Button>
            <Typography className={styles.registerText}>
              Belum punya akun? <Link to="/register" className={styles.registerLink}>Daftar disini</Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
