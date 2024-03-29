import { Box, Button, TextField, Typography } from "@mui/material";
import styles from "../RegisterForm.module.scss";

interface JobseekerFormProps {
  namaLengkap: string;
  nomorTelepon: string;
  kota: string;
  handleRegister: () => void;
}

export default function JobseekerForm({
  namaLengkap,
  nomorTelepon,
  kota,
  handleRegister,
}: JobseekerFormProps) {
  return (
    <>
      <Box className={styles.formContainer}>
        <Box className={styles.inputBox}>
          <Typography className={styles.inputLabel}>Nama Lengkap</Typography>
          <TextField
            className={styles.inputField}
            value={namaLengkap}
            type="text"
            variant="outlined"
            InputProps={{ style: { borderRadius: "20px", height: "52px" } }}
          />
        </Box>
        <Box className={styles.inputBox}>
          <Typography className={styles.inputLabel}>Nomor Telepon</Typography>
          <TextField
            className={styles.inputField}
            value={nomorTelepon}
            type="number"
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
            value={kota}
            type="text"
            variant="outlined"
            InputProps={{ style: { borderRadius: "20px", height: "52px" } }}
          />
        </Box>
        <Box className={styles.buttonBox}>
          <Button
            className={styles.button}
            type="submit"
            onClick={handleRegister}
          >
            Daftar
          </Button>
        </Box>
      </Box>
    </>
  );
}
