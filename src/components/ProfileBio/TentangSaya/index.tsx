import React from 'react';
import { Box, Grid, TextField, Typography } from '@mui/material';
import styles from './TentangSaya.module.scss';

interface TentangSayaProps {
  namaLengkap: string;
  nomorTelepon: string;
  kotaKabupaten: string;
  ttl: string;
  jenisKelamin: string;
  ringkasanPribadi: string;
}

const TentangSaya: React.FC<TentangSayaProps> = ({
  namaLengkap,
  nomorTelepon,
  kotaKabupaten,
  ttl,
  jenisKelamin,
  ringkasanPribadi,
}) => {
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
                value={namaLengkap}
                disabled
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className={styles.tentangsaya}>
              <Typography className={styles.inputLabel}>
                Nomor Telfon
              </Typography>
              <TextField 
                className={styles.inputfield}
                variant="outlined"
                InputProps={{ style: { borderRadius: '10px', height: '42px' } }}
                value={nomorTelepon}
                disabled
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
                value={kotaKabupaten}
                disabled
              />
            </Box>  
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className={styles.tentangsaya}>
              <Typography className={styles.inputLabel}>
                Tempat, Tanggal Lahir
              </Typography>
              <TextField 
                className={styles.inputfield}
                variant="outlined"
                InputProps={{ style: { borderRadius: '10px', height: '42px' } }}
                value={ttl}
                disabled
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
                value={jenisKelamin}
                disabled
              />
            </Box>  
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
                value={ringkasanPribadi}
                disabled
              />
            </Box>
          </Grid>
      </Box>
    </Box>
  );
};

export default TentangSaya;
