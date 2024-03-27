import { Box, Button, MenuItem, Select, Typography } from "@mui/material";
import styles from "../RegisterForm.module.scss";
import difaJobsLogo from "../../../assets/images/difajobs-dark.webp";

export default function GoogleForm() {
  return (
    <>
      <Box className={styles.formContainer}>
        <img
          src={difaJobsLogo}
          alt="Difa Jobs Logo"
          className={styles.difaJobsLogo}
        />
        <Box className={styles.inputBox}>
          <Typography className={styles.inputLabel}>
            Apa yang anda cari?
          </Typography>
          <Select
            labelId="demo-simple-select-label" //nama belum di fix
            id="demo-simple-select" //nama belum di fix
            label="role" //nama belum di fix
          >
            <MenuItem>Pencari Kerja</MenuItem>
            <MenuItem>Perusahaan</MenuItem>
          </Select>
        </Box>
        <Box className={styles.buttonBox}>
          <Button className={styles.button}>Selanjutnya</Button>
        </Box>
      </Box>
    </>
  );
}
