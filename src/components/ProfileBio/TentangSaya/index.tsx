import React from 'react';
import { Box, Grid, TextField, Typography } from '@mui/material';
import styles from './TentangSaya.module.scss';

const TentangSaya: React.FC = () => {
  return (
    <Box className={styles.root}>
      <Box className={styles.formContainer}>
        <Box>
          <Typography className={styles.title}>
            Tentang Saya
          </Typography>
        </Box>
        <Grid item xs={12} md={6}>
            <Box className={styles.tentangsaya}>
              <Typography className={styles.inputLabel}>
                Nama Lengkap
              </Typography>
              <TextField
                className={styles.inputfield}
                variant="outlined"
                InputProps={{ style: { borderRadius: '10px', height: '42px' } }}
              />
            </Box>
        </Grid>
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <Box className={styles.tentangsaya}>
                    <Typography className={styles.inputLabel}>
                        Nomor Telfon
                    </Typography>
                    <TextField 
                        className={styles.inputfield}
                        variant="outlined"
                        InputProps={{ style: { borderRadius: '10px', height: '42px' } }}
                    />
                </Box>
            </Grid>
            <Grid item xs={12} md={6}>
                <Box className={styles.tentangsaya}>
                    <Typography className={styles.inputLabel}>
                        Kota / Kabupaten
                    </Typography>
                    <TextField 
                        className={styles.inputfield}
                        variant="outlined"
                        InputProps={{ style: { borderRadius: '10px', height: '42px' } }}
                    />
                </Box>  
          </Grid>
        </Grid>
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <Box className={styles.tentangsaya}>
                    <Typography className={styles.inputLabel}>
                        Tempat, Tanggal Lahir
                    </Typography>
                    <TextField 
                        className={styles.inputfield}
                        variant="outlined"
                        InputProps={{ style: { borderRadius: '10px', height: '42px' } }}
                    />
                </Box>
            </Grid>
            <Grid item xs={12} md={6}>
                <Box className={styles.tentangsaya}>
                    <Typography className={styles.inputLabel}>
                        Jenis Kelamin
                    </Typography>
                    <TextField 
                        className={styles.inputfield}
                        variant="outlined"
                        InputProps={{ style: { borderRadius: '10px', height: '42px' } }}
                    />
                </Box>  
            </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
            <Box className={styles.tentangsaya}>
              <Typography className={styles.inputLabel}>
                Ringkasan Pribadi
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

export default TentangSaya;