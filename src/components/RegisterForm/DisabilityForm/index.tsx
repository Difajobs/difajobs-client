import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import styles from "../RegisterForm.module.scss";
import { SyntheticEvent, useState } from "react";

interface DisabilityFormProps {
  handleNext: () => void;
}

const dummyData = {
  success: true,
  message: "Disability list retrieved successfully",
  data: [
    {
      disabilities: [
        {
          id: 1,
          category_id: 1,
          name: "kehilangan salah satu lengan",
        },
        {
          id: 2,
          category_id: 1,
          name: "kehilangan dua lengan",
        },
        {
          id: 3,
          category_id: 1,
          name: "kehilangan salah satu kaki",
        },
        {
          id: 4,
          category_id: 1,
          name: "kehilangan kedua kaki",
        },
        {
          id: 5,
          category_id: 1,
          name: "anggota tubuh tidak berfungsi",
        },
        {
          id: 6,
          category_id: 1,
          name: "kelumpuhan",
        },
      ],
    },
    {
      disabilities: [
        {
          id: 7,
          category_id: 2,
          name: "buta total",
        },
        {
          id: 8,
          category_id: 2,
          name: "penglihatan terbatas",
        },
        {
          id: 9,
          category_id: 2,
          name: "buta warna",
        },
        {
          id: 10,
          category_id: 2,
          name: "tunnel vision",
        },
        {
          id: 11,
          category_id: 2,
          name: "kebutaan di malam hari",
        },
      ],
    },
  ],
};

export default function DisabilityForm({ handleNext }: DisabilityFormProps) {
  const [selectedDisabilities, setSelectedDisabilities] = useState<number[]>(
    []
  );

  const handleDisability = (value: number, checked: boolean) => {
    // Check if the disability is checked or unchecked
    if (checked) {
      // If checked, add the disability ID to the selectedDisabilities state
      setSelectedDisabilities((prevDisabilities) => [
        ...prevDisabilities,
        value,
      ]);
    } else {
      // If unchecked, remove the disability ID from the selectedDisabilities state
      setSelectedDisabilities((prevDisabilities) =>
        prevDisabilities.filter((id) => id !== value)
      );
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
                {dummyData.data
                  .flatMap((item) => item.disabilities)
                  .map((disability) => (
                    <FormControlLabel
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
                  ))}
                {dummyData.data
                  .flatMap((item) => item.disabilities)
                  .map((disability) => (
                    <FormControlLabel
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
                  ))}
              </FormGroup>
            </FormControl>
          </Box>
        </Box>
        <Box className={styles.buttonBox}>
          <Button className={styles.button} type="submit" onClick={handleNext}>
            Daftar
          </Button>
        </Box>
      </Box>
    </>
  );
}
