import { Box, Button, Typography } from "@mui/material";
import DifaJobsLogo from '../../assets/images/difajobs-dark.webp';
import { Link } from "react-router-dom";
import styles from './Verify.module.scss';

export default function Verify() {
  return (
    <Box className={styles.container}>
      <img src={DifaJobsLogo} alt="Difa Jobs Logo" className={styles.logo} />
      <Typography className={styles.heading}>
        Verify your email address
      </Typography>
      <Typography className={styles.text}>
        Please confirm that you want to use this as your Difa Jobs account email address. Once it's done you will be able to start login!
      </Typography>
      <Button className={styles.button}>
        Verify my email
      </Button>
      <Link to={"/"} className={styles.link}>
        Return to site
      </Link>
    </Box>
  )
}
