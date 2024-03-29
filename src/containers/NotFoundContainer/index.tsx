import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import astronautImage from '../../assets/images/astronaut.webp'
import Box from '@mui/material/Box'
import styles from './NotFoundContainer.module.scss';

export default function NotFoundPage() {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCount) => prevCount - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      navigate('/beranda');
    }
  }, [countdown, navigate]);

  return (
    <Box className={styles.pageNotFound}>
      <img src={astronautImage} alt="Astronaut Image" className={styles.image} />
      <Box className={styles.textBox}>
        <Typography variant='h2' className={styles.text}>
          404.
        </Typography>
        <Typography variant='h2' className={styles.text2}>
          Oops! You ran out of oxygen.
        </Typography>
        <Typography variant='h2' className={styles.countdown}>
          Redirecting in {countdown} seconds...
        </Typography>
      </Box>
    </Box>
  );
}
