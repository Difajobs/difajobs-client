import React from 'react';
import { Box, Grid, Typography, TextField } from '@mui/material';
import styles from './Disabilitas.module.scss';

interface DisabilitasProps {
  disabilitas: string;
}

const Disabilitas: React.FC<DisabilitasProps> = ({ disabilitas }) => {
  return (
    <Box className={styles.root}>
      <Box className={styles.formContainer}>
        <Box>
          <Typography className={styles.title}>
            Disabilitas 
          </Typography>
        </Box>
          <Grid item xs={12} md={6}>
            <Box className={styles.keahlian}>
              <Typography className={styles.inputLabel}>
                Disabilitas
              </Typography>
              <TextField
                className={styles.ringkasanpribadi}
                variant="outlined"
                InputProps={{ style: { borderRadius: '10px', height: '200px' } }}
                value={disabilitas}
                multiline
                disabled
              />
            </Box>
          </Grid>
      </Box>
    </Box>
  );
};

export default Disabilitas;
