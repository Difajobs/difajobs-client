import React from 'react';
import { Box, Button, Grid } from "@mui/material";
import styles from './Header.module.scss';
import { Link as RouterLink } from 'react-router-dom';
import NotificationsIcon from '@mui/icons-material/Notifications';

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <Box position="static" className={styles.root}>
      <Box className={styles.container}>
        <RouterLink to="#">
          <Grid className={styles.image}>
            <img src="https://i.ibb.co/H4tcbCZ/difajobs-light-3.png" alt="Your image" width="50" height="50" />
          </Grid>
        </RouterLink>
        <Grid className={styles.container2}>
          <Button className={styles.beranda}>
            Beranda
          </Button>
          <Button className={styles.akun}>Akun Saya</Button>
          <RouterLink to="#" className={styles.NotificationsIcon}>
            <NotificationsIcon/>
          </RouterLink>
        </Grid>
      </Box>
    </Box>
  );
};

export default Header;
