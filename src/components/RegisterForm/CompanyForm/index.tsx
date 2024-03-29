import { Box, Button, TextField, Typography } from "@mui/material";
import styles from "../RegisterForm.module.scss";
import UploadButton from "../../UploadButton";

export default function RegisterForm() {
  return (
    <>
      <Box className={styles.formContainer}>
        <Box className={styles.inputBox}>
          <Typography className={styles.inputLabel}>Nama Perusahaan</Typography>
          <TextField
            className={styles.inputField}
            variant="outlined"
            InputProps={{ style: { borderRadius: "20px", height: "52px" } }}
          />
        </Box>
        <Box className={styles.inputBox}>
          <Typography className={styles.inputLabel}>
            Kota / Kabupaten
          </Typography>
          <TextField
            className={styles.inputField}
            variant="outlined"
            InputProps={{ style: { borderRadius: "20px", height: "52px" } }}
          />
        </Box>
        <Box className={styles.inputBox}>
          <Typography className={styles.inputLabel}>
            Deskripsi Perusahaan
          </Typography>
          <TextField
            className={styles.inputField}
            variant="outlined"
            InputProps={{ style: { borderRadius: "20px", height: "52px" } }}
          />
        </Box>
        <Box className={styles.inputBox}>
          <Typography className={styles.inputLabel}>Logo Perusahaan</Typography>
          <UploadButton buttonText="Unggah Logo Perusahaan" />
        </Box>
        <Box className={styles.inputBox}>
          <Typography className={styles.inputLabel}>Foto Tambahan</Typography>
          <UploadButton buttonText="Unggah Foto Tambahan" />
        </Box>
        <Box className={styles.buttonBox}>
          <Button className={styles.button}>Daftar</Button>
        </Box>
      </Box>
    </>
  );
}
