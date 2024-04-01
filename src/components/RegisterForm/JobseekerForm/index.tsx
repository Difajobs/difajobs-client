import {
  Box,
  Button,
  Divider,
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import styles from "../RegisterForm.module.scss";
import { ChangeEvent, useState } from "react";

interface JobseekerFormProps {
  namaLengkap: string;
  gender: string;
  dob: string;
  nomorTelepon: string;
  kota: string;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleGenderChange: (e: SelectChangeEvent) => void;
  handleRegister: () => void;
  handleBack: () => void;
}

const genders = [{ value: "Laki-laki" }, { value: "Perempuan" }];

export default function JobseekerForm({
  namaLengkap,
  gender,
  dob,
  nomorTelepon,
  kota,
  handleInputChange,
  handleGenderChange,
  handleRegister,
  handleBack,
}: JobseekerFormProps) {
  const [clicked, setClicked] = useState(false);

  const handleInputClicked = (e: ChangeEvent<HTMLInputElement>) => {
    handleInputChange(e);
    setClicked(true);
  };

  const validateNama = (namaLengkap: string) => {
    const regexNama = /^[a-zA-Z ]+$/;
    if (clicked && !regexNama.test(namaLengkap)) {
      return "Nama tidak valid.";
    }
    return undefined;
  };

  const validateGender = (gender: string) => {
    if (clicked && !gender) {
      return "Jenis Kelamin harus diisi.";
    }
    return undefined;
  };

  const validateDob = (dob: string) => {
    if (clicked && !dob) {
      return "Tanggal Lahir harus diisi.";
    }
    return undefined;
  };

  const validateTelepon = (nomorTelepon: string) => {
    const regexTelepon = /^[0-9]+$/;
    if (
      clicked &&
      (nomorTelepon.length < 10 || !regexTelepon.test(nomorTelepon))
    ) {
      return "Nomor Telepon tidak valid. (opsional)";
    }
    return undefined;
  };

  return (
    <>
      <Box className={styles.formContainer}>
        <Box className={styles.inputBox}>
          <Typography className={styles.inputLabel}>Nama Lengkap</Typography>
          <TextField
            className={styles.inputField}
            value={namaLengkap}
            id="namaLengkap"
            name="namaLengkap"
            error={!!validateNama(namaLengkap)}
            helperText={validateNama(namaLengkap)}
            onChange={handleInputClicked}
            type="text"
            variant="outlined"
            InputProps={{ style: { borderRadius: "20px", height: "52px" } }}
          />
        </Box>
        <Box className={styles.inputBox}>
          <Typography className={styles.inputLabel}>Jenis Kelamin</Typography>
          <FormControl sx={{ width: "100%", mb: "15px" }}>
            <Select
              className={styles.selectFieldGender}
              value={gender}
              onChange={handleGenderChange}
              name="gender"
              id="gender"
              error={!!validateGender(gender)}
            >
              {genders.map((gender) => (
                <MenuItem key={gender.value} value={gender.value}>
                  {gender.value}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>{validateGender(gender)}</FormHelperText>
          </FormControl>
        </Box>
        <Box className={styles.inputBox}>
          {/* sementara pake textfield type date */}
          <Typography className={styles.inputLabel}>Tanggal Lahir</Typography>
          <TextField
            className={styles.inputField}
            value={dob}
            name="dob"
            id="dob"
            onChange={handleInputClicked}
            error={!!validateDob(dob)}
            helperText={validateDob(dob)}
            type="date"
            variant="outlined"
            InputProps={{ style: { borderRadius: "20px", height: "52px" } }}
          />
        </Box>
        <Box className={styles.inputBox}>
          <Typography className={styles.inputLabel}>Nomor Telepon</Typography>
          <TextField
            className={styles.inputField}
            name="nomorTelepon"
            id="nomorTelepon"
            value={nomorTelepon}
            onChange={handleInputClicked}
            error={!!validateTelepon(nomorTelepon)}
            helperText={validateTelepon(nomorTelepon)}
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
            name="kota"
            id="kota"
            onChange={handleInputClicked}
            type="text"
            variant="outlined"
            InputProps={{ style: { borderRadius: "20px", height: "52px" } }}
          />
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
              !gender ||
              !dob ||
              Boolean(validateNama(namaLengkap)) ||
              Boolean(validateGender(gender)) ||
              Boolean(validateDob(dob))
            }
          >
            Daftar
          </Button>
        </Box>
      </Box>
    </>
  );
}
