import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from "@mui/material";
import DifaJobsLogo from '../../assets/images/difajobs-dark.webp';
import { Link } from "react-router-dom";
import styles from './Verify.module.scss';
import { sendVerification } from "../../utils/fetchApi";

export default function Verify() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setEmail(event.target.value);
  };

  const handleVerifyClick = async () => {
    try {
      if (!email) {
        setError('Please enter your email address.');
        return;
      }
      await sendVerification({ email });
      setError('');
      console.log('Verification email sent successfully.');
    } catch (error) {
      setError('An error occurred while sending verification email.');
      console.error('Error sending verification email:', error);
    }
  };

  return (
    <Box className={styles.container}>
      <img src={DifaJobsLogo} alt="Difa Jobs Logo" className={styles.logo} />
      <Typography className={styles.heading}>
        Verify your email address
      </Typography>
      <Typography className={styles.text}>
        Please confirm that you want to use this as your Difa Jobs account email address. Once it's done you will be able to start login!
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
        Verify my email
      </Button>
      <Link to={"/"} className={styles.link}>
        Return to site
      </Link>
    </Box>
  )
}
