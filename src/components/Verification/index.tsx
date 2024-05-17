import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from "@mui/material";
import DifaJobsLogo from '../../assets/images/difajobs-dark.webp';
import { Link } from "react-router-dom";
import styles from './Verify.module.scss';
import { sendVerification } from "../../utils/fetchApi";
import CircularProgress from '@mui/material/CircularProgress';

export default function Verify() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setEmail(event.target.value);
  };

  const handleVerifyClick = async () => {
    try {
      if (!email) {
        setError('Please enter your email address.');
        return;
      }
      setLoading(true); // Start loading
      await sendVerification({ email });
      setError('');
      console.log('Verification email sent successfully.');
    } catch (error) {
      setError('An error occurred while sending verification email.');
      console.error('Error sending verification email:', error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <Box className={styles.container}>
      <img src={DifaJobsLogo} alt="Difa Jobs Logo" className={styles.logo} />
      <Typography className={styles.heading}>
        Verifikasi Email Anda
      </Typography>
      <Typography className={styles.text}>
        Satu langkah lagi dan akun anda dapat segera digunakan untuk login di website Difa Jobs.
      </Typography>
      <TextField
        className={styles.inputEmail}
        value={email}
        onChange={handleEmailChange}
        error={!!error}
        helperText={error}
        InputProps={{
          style: {
            borderRadius: '20px',
            height: '52px',
            padding: '0px 5px',
          }
        }}
      />
      <Button className={styles.button} onClick={handleVerifyClick}>
        {loading ? <CircularProgress size={24} /> : "Kirim verifikasi email"}
      </Button>
      <Link to={"/login"} className={styles.link}>
        Kembali ke website
      </Link>
    </Box>
  )
}
