import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import styles from './Disabilitas.module.scss';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';

const Disabilitas: React.FC = () => {
  
  return (
    <Box className={styles.root}>
      <Box className={styles.formContainer}>
        <Box>
          <Typography className={styles.title}>
            Keahlian & Sertifikasi
          </Typography>
        </Box>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Box className={styles.keahlian}>
              <Box>
                  <Typography className={styles.inputLabel}>
                    Ringkasan Pribadi
                  </Typography>
              </Box>
              <FormGroup className={styles.ringkasanpribadi}>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Keterbatasan Mobilitas" className={styles.label} />
                <FormControlLabel control={<Checkbox defaultChecked />} label="Keterbatasan Penglihatan" />
                <FormControlLabel control={<Checkbox defaultChecked />} label="Keterbatasan Pendengaran" />
              </FormGroup>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box className={styles.keahlian}>
              <Typography className={styles.inputLabel}>
                Disabilitas & Hambatan
              </Typography>
            </Box>
            <FormGroup className={styles.ringkasanpribadi}>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Kehilangan Salah Satu Lengan" />
                <FormControlLabel control={<Checkbox defaultChecked />} label="Penglihatan Terbatas" />
                <FormControlLabel control={<Checkbox defaultChecked />} label="Tinnitus" />
            </FormGroup>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Disabilitas;