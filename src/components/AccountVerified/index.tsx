import { Box, Typography } from "@mui/material";
import styles from './AccountVerified.module.scss'
import difaJobsLogo from '../../assets/images/difajobs-dark.webp'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { confirmVerification } from "../../utils/fetchApi";

export default function AccountVerified() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10); // Assuming a 10-second countdown

  // Get the email and token values from the URL
  const url = window.location.href;
  const email = url.split('/')[4];
  const token = url.split('/')[5];

  useEffect(() => {
    // Call confirmVerification function when component mounts
    confirmVerification(email, token)
      .then(response => {
        // Handle successful verification
        console.log("Verification successful:", response);
      })
      .catch(error => {
        // Handle verification error
        console.error("Error verifying account:", error);
      });

    const timer = setInterval(() => {
      setCountdown(prevCount => prevCount - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [email, token]);

  useEffect(() => {
    if (countdown < 0) {
      navigate('/');
    }
  }, [countdown, navigate]);

  return (
    <Box className={styles.container}>
      <img src={difaJobsLogo} alt="Difa Jobs Logo" />
      <Typography variant="h4" className={styles.successMessage}>
        Great! Your account has been verified!
      </Typography>
      <Typography className={styles.congratsMessage}>
        Thank you for joining us. We wish you the best in your career journey!
      </Typography>
      <Typography className={styles.congratsMessage}>
        Redirecting to Login Page in {countdown} seconds...
      </Typography>
    </Box>
  );
}
