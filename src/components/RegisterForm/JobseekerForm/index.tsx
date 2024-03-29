import {
  Box,
  Button,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import styles from "../RegisterForm.module.scss";

interface JobseekerFormProps {
  namaLengkap: string;
  gender: string;
  dob: string;
  nomorTelepon: string;
  kota: string;
  handleGenderChange: (e: SelectChangeEvent) => void;
  handleRegister: () => void;
}

const genders = [{ value: "Laki-laki" }, { value: "Perempuan" }];

export default function JobseekerForm({
  namaLengkap,
  gender,
  dob,
  nomorTelepon,
  kota,
  handleGenderChange,
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
          <Typography className={styles.inputLabel}>Jenis Kelamin</Typography>
          <Select
            className={styles.selectField}
            value={gender}
            onChange={handleGenderChange}
            name="gender"
            id="gender"
            required
          >
            {genders.map((gender) => (
              <MenuItem key={gender.value} value={gender.value}>
                {gender.value}
              </MenuItem>
            ))}
          </Select>
        </Box>
        <Box className={styles.inputBox}>
          {/* sementara pake textfield type date */}
          <Typography className={styles.inputLabel}>Tanggal Lahir</Typography>
          <TextField
            className={styles.inputField}
            value={dob}
            type="date"
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
