import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  InputAdornment,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import styles from "../RegisterForm.module.scss";
import { ChangeEvent, useState } from "react";
import HearingDisabledIcon from "@mui/icons-material/HearingDisabled";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import AccessibleIcon from "@mui/icons-material/Accessible";
import PsychologyIcon from "@mui/icons-material/Psychology";

interface JobseekerFormProps {
  namaLengkap: string;
  gender: string;
  dob: string;
  nomorTelepon: string;
  kota: string;
  disabilitas: number[];
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleGenderChange: (e: SelectChangeEvent) => void;
  handleDisability: (value: number, checked: boolean) => void;
  handleNext: () => void;
  handleBack: () => void;
}

const genders = [{ value: "Laki-laki" }, { value: "Perempuan" }];

export default function JobseekerForm({
  namaLengkap,
  gender,
  dob,
  nomorTelepon,
  disabilitas,
  kota,
  handleInputChange,
  handleGenderChange,
  handleDisability,
  handleNext,
  handleBack,
}: JobseekerFormProps) {
  const [clicked, setClicked] = useState(false);

  const handleInputClicked = (e: ChangeEvent<HTMLInputElement>) => {
    handleInputChange(e);
    setClicked(true);
  };

  const handleNumberInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (/^\d*$/.test(value)) {
      setClicked(true);
      handleInputChange(e);
    }
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
      (nomorTelepon.length < 6 || !regexTelepon.test(nomorTelepon))
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
        <Box className={styles.inputBox2}>
          <Box className={styles.inputBox}>
            <Typography className={styles.inputLabel}>Jenis Kelamin</Typography>
            <FormControl sx={{ width: "90%", mb: "15px" }}>
              <Select
                className={styles.selectFieldGender}
                value={gender}
                onChange={handleGenderChange}
                name="gender"
                id="gender"
                error={!!validateGender(gender)}
              >
                {genders.map(gender => (
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
        </Box>
        <Box className={styles.inputBox}>
          <Typography className={styles.inputLabel}>Nomor Telepon</Typography>
          <TextField
            className={styles.inputField}
            name="nomorTelepon"
            id="nomorTelepon"
            value={nomorTelepon}
            onChange={handleNumberInputChange}
            error={!!validateTelepon(nomorTelepon)}
            helperText={validateTelepon(nomorTelepon)}
            type="text"
            variant="outlined"
            InputProps={{
              style: { borderRadius: "20px", height: "52px" },
              startAdornment: (
                <InputAdornment sx={{ pt: "1px" }} position="start">
                  +62
                </InputAdornment>
              ),
            }}
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
        <Box className={styles.inputBox}>
          <Typography className={styles.inputLabel}>
            Disabilitas (bisa memilih lebih dari 1)
          </Typography>
          <FormControl component="fieldset">
            <FormGroup
              aria-label="kategori disabilitas"
              className={styles.disabilityContainer}
              row
            >
              <FormControlLabel
                className={styles.formBox}
                name="kategori disabilitas"
                value={disabilitas}
                control={
                  <Checkbox
                    onChange={e => handleDisability(1, e.target.checked)}
                  />
                }
                label={<AccessibleIcon className={styles.disabilityIcon} />}
                labelPlacement="top"
              />
              <FormControlLabel
                className={styles.formBox}
                name="kategori disabilitas"
                value={disabilitas}
                control={
                  <Checkbox
                    onChange={e => handleDisability(2, e.target.checked)}
                  />
                }
                label={<VisibilityOffIcon className={styles.disabilityIcon} />}
                labelPlacement="top"
              />
              <FormControlLabel
                className={styles.formBox}
                name="kategori disabilitas"
                value={disabilitas}
                control={
                  <Checkbox
                    onChange={e => handleDisability(3, e.target.checked)}
                  />
                }
                label={
                  <HearingDisabledIcon className={styles.disabilityIcon} />
                }
                labelPlacement="top"
              />
              <FormControlLabel
                className={styles.formBox}
                name="kategori disabilitas"
                value={disabilitas}
                control={
                  <Checkbox
                    onChange={e => handleDisability(4, e.target.checked)}
                  />
                }
                label={<PsychologyIcon className={styles.disabilityIcon} />}
                labelPlacement="top"
              />
              {/* <FormControlLabel
                className={styles.formBox}
                name="kategori disabilitas"
                value={disabilitas}
                control={
                  <Checkbox
                    onChange={(e) => handleDisability(5, e.target.checked)}
                  />
                }
                label={<PsychologyIcon className={styles.disabilityIcon} />}
                labelPlacement="top"
              /> */}
            </FormGroup>
          </FormControl>
        </Box>
        {/* <Divider className={styles.divider2} /> */}
        <Box className={styles.buttonBox2}>
          <Button className={styles.backButton} onClick={handleBack}>
            Kembali
          </Button>
          <Button
            className={styles.button}
            type="submit"
            onClick={handleNext}
            disabled={
              !namaLengkap ||
              !gender ||
              !dob ||
              Boolean(validateNama(namaLengkap)) ||
              Boolean(validateGender(gender)) ||
              Boolean(validateDob(dob))
            }
          >
            Selanjutnya
          </Button>
        </Box>
      </Box>
    </>
  );
}
