import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material";
import styles from "../RegisterForm.module.scss";
import { ChangeEvent, SyntheticEvent } from "react";

interface DisabilityFormProps {
  handleNext: () => void;
  handleBack: () => void;
  disabilitas: number[];
  deskripsiList: string;
  disabilityData: {
    id: number;
    disabilities: { id: number; name: string }[];
  }[];
  handleDisability: (id: number, checked: boolean) => void;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function DisabilityForm({
  handleNext,
  handleBack,
  disabilityData,
  deskripsiList,
  disabilitas,
  handleDisability,
  handleInputChange,
}: DisabilityFormProps) {
  const handleLainnyaChecked = (checked: boolean) => {
    // If "lainnya" is checked, handle it accordingly
    if (checked) {
      // Add the "lainnya" id (0) to the selectedDisabilities state
      handleDisability(0, true);
    } else {
      // Remove the "lainnya" id (0) from the selectedDisabilities state
      handleDisability(0, false);
    }
  };
  return (
    <>
      <Box className={styles.formContainer}>
        <Box className={styles.inputBox}>
          <Typography className={styles.hambatanLabel}>
            Jenis Hambatan / Disabilitas (bisa memilih lebih dari 1)
          </Typography>
          <Box className={styles.scrollContainer}>
            <FormControl component="fieldset">
              <FormGroup
                aria-label="disabilitas"
                className={styles.hambatanContainer}
                row
              >
                {disabilityData.map((category) =>
                  category.disabilities.map((disability) => (
                    <FormControlLabel
                      className={styles.formBox}
                      key={disability.id}
                      name="disabilitas"
                      value={disability.id}
                      control={
                        <Checkbox
                          onChange={(e: SyntheticEvent) =>
                            handleDisability(
                              disability.id,
                              (e.target as HTMLInputElement).checked
                            )
                          }
                        />
                      }
                      label={disability.name}
                      labelPlacement="end"
                    />
                  ))
                )}
                <FormControlLabel
                  className={styles.formBox}
                  name="disabilitas"
                  value={disabilitas}
                  label="lainnya"
                  labelPlacement="end"
                  control={
                    <Checkbox
                      onChange={(e: SyntheticEvent) =>
                        handleLainnyaChecked(
                          (e.target as HTMLInputElement).checked
                        )
                      }
                    />
                  }
                />
              </FormGroup>
            </FormControl>
          </Box>
        </Box>
        <Box className={styles.inputBox}>
          <Typography className={styles.inputLabel}>Deskripsi</Typography>
          <TextField
            className={styles.inputField}
            value={deskripsiList}
            id="deskripsiList"
            name="deskripsiList"
            onChange={handleInputChange}
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
          <Button className={styles.button} type="submit" onClick={handleNext}>
            Daftar
          </Button>
        </Box>
      </Box>
    </>
  );
}
