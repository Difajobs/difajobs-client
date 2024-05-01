import React from 'react';
import { Box, Grid, TextField, Typography } from '@mui/material';
import styles from './Keahlian.module.scss';

const Keahlian: React.FC = () => {
  return (
    <Box className={styles.root}>
      <Box className={styles.formContainer}>
        <Box>
          <Typography className={styles.title}>
            Keahlian & Sertifikasi
          </Typography>
        </Box>
        <Grid item xs={12} md={6}>
            <Box className={styles.keahlian}>
              <Typography className={styles.inputLabel}>
                Keahlian
              </Typography>
              <TextField
                className={styles.ringkasanpribadi}
                variant="outlined"
                InputProps={{ style: { borderRadius: '10px', height: '200px' } }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className={styles.keahlian}>
              <Typography className={styles.inputLabel}>
                Sertifikat
              </Typography>
              <TextField
                className={styles.ringkasanpribadi}
                variant="outlined"
                InputProps={{ style: { borderRadius: '10px', height: '200px' } }}
              />
            </Box>
          </Grid>
      </Box>
    </Box>
  );
};

export default Keahlian;