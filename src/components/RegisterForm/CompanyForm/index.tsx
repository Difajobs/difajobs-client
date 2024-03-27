import { useState, ChangeEvent } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import styles from "../RegisterForm.module.scss";
import difaJobsLogo from "../../../assets/images/difajobs-dark.webp";

export default function RegisterForm() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_companyLogo, setCompanyLogo] = useState<File | null>(null); // Unused variable

  const handleCompanyLogoChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setCompanyLogo(file);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_additionalPhoto, setAdditionalPhoto] = useState<File | null>(null);

  const handleAdditionalPhotoChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setAdditionalPhoto(file);
    }
  };

  return (
    <>
      <Box className={styles.formContainer}>
        <img
          src={difaJobsLogo}
          alt="Difa Jobs Logo"
          className={styles.difaJobsLogo}
        />
        <Box className={styles.inputBox}>
          <Typography className={styles.inputLabel}>Nama Perusahaan</Typography>
          <TextField className={styles.inputField} />
        </Box>
        <Box className={styles.inputBox}>
          <Typography className={styles.inputLabel}>
            Kota / Kabupaten
          </Typography>
          <TextField className={styles.inputField} />
        </Box>
        <Box className={styles.inputBox}>
          <Typography className={styles.inputLabel}>
            Deskripsi Perusahaan
          </Typography>
          <TextField className={styles.inputField} />
        </Box>
        <Box className={styles.inputBox}>
          <Typography className={styles.inputLabel}>Logo Perusahaan</Typography>
          <input
            type="file"
            accept="image/*"
            onChange={handleCompanyLogoChange}
          />
        </Box>
        <Box className={styles.inputBox}>
          <Typography className={styles.inputLabel}>Foto Tambahan</Typography>
          <input
            type="file"
            accept="image/*"
            onChange={handleAdditionalPhotoChange}
          />
        </Box>
        <Box className={styles.buttonBox}>
          <Button className={styles.button}>Daftar</Button>
        </Box>
      </Box>
    </>
  );
}
