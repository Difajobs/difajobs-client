import {
  Box,
  Button,
  Divider,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import styles from "../RegisterForm.module.scss";
import googleLogo from "../../../assets/images/google.svg";

export default function UserForm() {
  return (
    <>
      <Box className={styles.formContainer}>
        <Box className={styles.inputBox}>
          <Typography className={styles.inputLabel}>Email</Typography>
          <TextField className={styles.inputField} type="email" size="small" />
        </Box>
        <Box className={styles.inputBox}>
          <Typography className={styles.inputLabel}>Kata Sandi</Typography>
          <TextField
            className={styles.inputField}
            type="password"
            size="small"
          />
        </Box>
        <Box className={styles.inputBox}>
          <Typography className={styles.inputLabel}>
            Konfirmasi Kata Sandi
          </Typography>
          <TextField
            className={styles.inputField}
            type="password"
            size="small"
          />
        </Box>
        <Box className={styles.inputBox}>
          <Typography className={styles.inputLabel}>
            Apa yang anda cari?
          </Typography>
          <Select
            labelId="demo-simple-select-label" //nama belum di fix
            id="demo-simple-select" //nama belum di fix
            label="role" //nama belum di fix
            size="small"
          >
            <MenuItem>Pencari Kerja</MenuItem>
            <MenuItem>Perusahaan</MenuItem>
          </Select>
        </Box>
        <Box className={styles.buttonBox}>
          <Button className={styles.button}>Selanjutnya</Button>
          <Divider className={styles.divider} />
          <Button className={styles.googleButton}>
            <img
              src={googleLogo}
              alt="Google Logo"
              className={styles.googleLogo}
            />
            <Typography className={styles.googleText}>
              Daftar dengan Google
            </Typography>
          </Button>
        </Box>
      </Box>
    </>
  );
}
