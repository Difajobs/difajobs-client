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
import { Link } from "react-router-dom";
import styles from "../RegisterForm.module.scss";
import googleLogo from "../../../assets/images/google.svg";
import { ChangeEvent, useState } from "react";

interface UserFormProps {
  email: string;
  password: string;
  confirmPass: string;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  role: string;
  handleRoleChange: (e: SelectChangeEvent) => void;
  handleNext: () => void;
}

const roles = [
  { key: "Job Seeker", value: "job seeker" },
  { key: "Recruiter", value: "recruiter" },
];

export default function UserForm({
  email,
  password,
  confirmPass,
  role,
  handleRoleChange,
  handleInputChange,
  handleNext,
}: UserFormProps) {
  const [clicked, setClicked] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (clicked && !emailRegex.test(email)) {
      return "Email tidak valid.";
    }
    return undefined;
  };

  const validatePassword = (password: string) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
    if (clicked && (password.length < 6 || !passwordRegex.test(password))) {
      return password.length < 6
        ? "Kata Sandi minimal 6 karakter."
        : "Kata Sandi harus mengandung huruf dan angka.";
    }
    return undefined;
  };

  const validateConfirmPass = (confirmPass: string) => {
    if (clicked && confirmPass !== password) {
      return "Kata Sandi tidak sama.";
    }
    return undefined;
  };

  const handleInputClicked = (e: ChangeEvent<HTMLInputElement>) => {
    handleInputChange(e);
    setClicked(true);
  };

  return (
    <>
      <Box className={styles.formContainer}>
        <Box className={styles.inputBox}>
          <Typography className={styles.inputLabel}>Email</Typography>
          <TextField
            className={styles.inputField}
            value={email}
            onChange={handleInputClicked}
            name="email"
            id="email"
            type="email"
            variant="outlined"
            required
            error={!!validateEmail(email)}
            helperText={validateEmail(email)}
            InputProps={{ style: { borderRadius: "20px", height: "52px" } }}
          />
        </Box>
        <Box className={styles.inputBox}>
          <Typography className={styles.inputLabel}>Kata Sandi</Typography>
          <TextField
            className={styles.inputField}
            value={password}
            onChange={handleInputClicked}
            name="password"
            id="password"
            type="password"
            variant="outlined"
            required
            error={!!validatePassword(password)}
            helperText={validatePassword(password)}
            InputProps={{ style: { borderRadius: "20px", height: "52px" } }}
          />
        </Box>
        <Box className={styles.inputBox}>
          <Typography className={styles.inputLabel}>
            Konfirmasi Kata Sandi
          </Typography>
          <TextField
            className={styles.inputField}
            value={confirmPass}
            onChange={handleInputClicked}
            name="confirmPass"
            id="confirmPass"
            type="password"
            variant="outlined"
            required
            error={!!validateConfirmPass(confirmPass)}
            helperText={validateConfirmPass(confirmPass)}
            InputProps={{ style: { borderRadius: "20px", height: "52px" } }}
          />
        </Box>
        <Box className={styles.inputBox}>
          <Typography className={styles.inputLabel}>
            Apa yang anda cari?
          </Typography>
          <Select
            className={styles.selectField}
            value={role}
            onChange={handleRoleChange}
            name="role"
            id="role"
            required
          >
            {roles.map((role) => (
              <MenuItem key={role.key} value={role.value}>
                {role.key}
              </MenuItem>
            ))}
          </Select>
        </Box>
        <Box className={styles.buttonBox}>
          <Button
            className={styles.button}
            onClick={handleNext}
            disabled={
              !email ||
              !password ||
              !confirmPass ||
              !role ||
              Boolean(validateEmail(email)) ||
              Boolean(validatePassword(password)) ||
              Boolean(validateConfirmPass(confirmPass))
            }
          >
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
