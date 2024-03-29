import {
  Box,
  Button,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import styles from "../RegisterForm.module.scss";

interface GoogleForm {
  role: string;
  handleRoleChange: (e: SelectChangeEvent) => void;
  handleNext: () => void;
}

const roles = [{ value: "Pencari Kerja" }, { value: "Perusahaan" }];

export default function GoogleForm({
  role,
  handleRoleChange,
  handleNext,
}: GoogleForm) {
  return (
    <>
      <Box className={styles.formContainer}>
        <Box className={styles.inputBox}>
          <Typography className={styles.inputLabel}>
            Apa yang anda cari?
          </Typography>
          <Select
            className={styles.selectField}
            defaultValue={"Pencari Kerja"}
            value={role}
            onChange={handleRoleChange}
            labelId="demo-simple-select-label" //nama belum di fix
            id="demo-simple-select" //nama belum di fix
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
        </Box>
      </Box>
    </>
  );
}
