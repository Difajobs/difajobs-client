import { Box, Button, TextField, Typography } from "@mui/material";
import styles from "../RegisterForm.module.scss";

export default function JobseekerForm() {
  return (
    <>
      <Box className={styles.formContainer}>
        <Box className={styles.inputBox}>
          <Typography className={styles.inputLabel}>Nama Lengkap</Typography>
          <TextField className={styles.inputField} size="small" />
        </Box>
        <Box className={styles.inputBox}>
          <Typography className={styles.inputLabel}>Nomor Telepon</Typography>
          <TextField className={styles.inputField} size="small" />
        </Box>
        <Box className={styles.inputBox}>
          <Typography className={styles.inputLabel}>
            Kota / Kabupaten
          </Typography>
          <TextField className={styles.inputField} size="small" />
        </Box>
        <Box className={styles.buttonBox}>
          <Button className={styles.button}>Daftar</Button>
        </Box>
      </Box>
    </>
  );
}
