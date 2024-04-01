import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import styles from "../RegisterForm.module.scss";
import UploadButton from "../../UploadButton";
import { ChangeEvent, useState } from "react";

interface RegisterFormProps {
  namaLengkap: string;
  kota: string;
  deskripsi: string;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleRegister: () => void;
  handleBack: () => void;
}

export default function RegisterForm({
  namaLengkap,
  kota,
  deskripsi,
  handleInputChange,
  handleRegister,
  handleBack,
}: RegisterFormProps) {
  const [clicked, setClicked] = useState(false);

  const handleInputClicked = (e: ChangeEvent<HTMLInputElement>) => {
    setClicked(true);
    handleInputChange(e);
  };

  const validateName = (name: string) => {
    if (clicked && name.length < 3) {
      return "Nama minimal 3 karakter";
    }
    return undefined;
  };

  const validateKota = (kota: string) => {
    const regexKota = /^[a-zA-Z ]+$/;
    if (clicked && (kota.length < 3 || !regexKota.test(kota))) {
      return kota.length < 3
        ? "Kota / Kabupaten minimal 3 karakter."
        : "Kota / Kabupaten tidak valid.";
    }
    return undefined;
  };

  const validateDeskripsi = (deskripsi: string) => {
    if (clicked && deskripsi.length < 100) {
      return "Deskripsi minimal 100 karakter.";
    }
    return undefined;
  };

  return (
    <>
      <Box className={styles.formContainer}>
        <Box className={styles.inputBox}>
          <Typography className={styles.inputLabel}>Nama Perusahaan</Typography>
          <TextField
            className={styles.inputField}
            name="namaLengkap"
            id="namaLengkap"
            value={namaLengkap}
            onChange={handleInputClicked}
            error={!!validateName(namaLengkap)}
            helperText={validateName(namaLengkap)}
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
            name="kota"
            id="kota"
            value={kota}
            onChange={handleInputClicked}
            error={!!validateKota(kota)}
            helperText={validateKota(kota)}
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
            name="deskripsi"
            id="deskripsi"
            value={deskripsi}
            onChange={handleInputClicked}
            error={!!validateDeskripsi(deskripsi)}
            helperText={validateDeskripsi(deskripsi)}
            variant="outlined"
            multiline
            maxRows={4}
            InputProps={{
              style: {
                borderRadius: "20px",
                height: "104px",
              },
            }}
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
        <Divider className={styles.divider2} />
        <Box className={styles.buttonBox2}>
          <Button className={styles.backButton} onClick={handleBack}>
            Kembali
          </Button>
          <Button
            className={styles.button}
            type="submit"
            onClick={handleRegister}
            disabled={
              !namaLengkap ||
              !kota ||
              !deskripsi ||
              Boolean(validateName(namaLengkap)) ||
              Boolean(validateKota(kota))
            }
          >
            Daftar
          </Button>
        </Box>
      </Box>
    </>
  );
}
