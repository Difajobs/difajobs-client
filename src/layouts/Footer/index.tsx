import { Box, IconButton, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import styles from './Footer.module.scss'

export default function footer() {
  return (
    <Box className={styles.footerContainer}>
      <Box className={styles.footer}>
        <Typography className={styles.copyrightText}>
          © 2024 Difa Jobs Indonesia
        </Typography>
        <Box className={styles.buttonContainer}>
          <IconButton className={styles.iconButton}>
            <FacebookIcon className={styles.icon} />
          </IconButton >
          <IconButton className={styles.iconButton}>
            <TwitterIcon className={styles.icon} />
          </IconButton>
          <IconButton className={styles.iconButton}>
            <InstagramIcon className={styles.icon} />
          </IconButton>
          <IconButton className={styles.iconButton}>
            <LinkedInIcon className={styles.icon} />
          </IconButton>
        </Box>
      </Box >
    </Box>
  )
}
