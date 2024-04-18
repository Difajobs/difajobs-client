import { Box, Typography } from "@mui/material";
import avatar from '../../assets/images/dummy.webp'
import styles from './ProfileDashboard.module.scss'

export default function ProfileDashboard() {
  return (
    <Box className={styles.container}>
      <img className={styles.avatar} src={avatar} alt="Photo Profile" />
      <Typography className={styles.name}>
        Tio Pakusadewo
      </Typography>
      <Typography className={styles.biography}>
        Senior Waiters
      </Typography>
    </Box>
  )
}