import React from 'react';
import { Box, Grid, TextField, Typography } from '@mui/material';
import styles from './Keahlian.module.scss';

interface KeahlianProps {
  keahlian: string;
  sertifikat: string;
}

const Keahlian: React.FC<KeahlianProps> = ({
  keahlian,
  sertifikat,
}) => { 
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
                value={keahlian}
                disabled
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
                value={sertifikat}
                disabled
              />
            </Box>
          </Grid>
      </Box>
    </Box>
  );
};

export default Keahlian;