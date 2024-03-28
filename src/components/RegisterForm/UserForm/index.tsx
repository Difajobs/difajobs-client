import {
  Box,
  Button,
  Divider,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom"; // Import Link from react-router-dom with a different name to avoid conflict
import styles from "../RegisterForm.module.scss";
import googleLogo from "../../../assets/images/google.svg";
// import { ChangeEvent } from "react";

interface UserFormProps {
  email: string;
  password: string;
  confirmPass: string;
  // handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  role: string;
  handleRoleChange: (e: SelectChangeEvent) => void;
  handleNext: () => void;
}

const roles = [{ value: "Pencari Kerja" }, { value: "Perusahaan" }];

export default function UserForm({
  email,
  password,
  confirmPass,
  role,
  handleRoleChange,
  // handleInputChange,
  handleNext,
}: UserFormProps) {
  return (
    <>
      <Box className={styles.formContainer}>
        <Box className={styles.inputBox}>
          <Typography className={styles.inputLabel}>Email</Typography>
          <TextField className={styles.inputField} value={email} type="email" />
        </Box>
        <Box className={styles.inputBox}>
          <Typography className={styles.inputLabel}>Kata Sandi</Typography>
          <TextField
            className={styles.inputField}
            value={password}
            type="password"
          />
        </Box>
        <Box className={styles.inputBox}>
          <Typography className={styles.inputLabel}>
            Konfirmasi Kata Sandi
          </Typography>
          <TextField
            className={styles.inputField}
            value={confirmPass}
            type="password"
          />
        </Box>
        <Box className={styles.inputBox}>
          <Typography className={styles.inputLabel}>
            Apa yang anda cari?
          </Typography>
          <Select
            className={styles.inputField}
            value={role}
            onChange={handleRoleChange}
            labelId="role-label"
            id="role"
          >
            {roles.map((role) => (
              <MenuItem key={role.value} value={role.value}>
                {role.value}
              </MenuItem>
            ))}
          </Select>
        </Box>
        <Box className={styles.buttonBox}>
          <Button className={styles.button} onClick={handleNext}>
            Selanjutnya
          </Button>
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
          <Typography className={styles.loginText}>
            Sudah punya akun?{" "}
            <Link to="/login" className={styles.registerLink}>
              Masuk disini
            </Link>
          </Typography>
        </Box>
      </Box>
    </>
  );
}
