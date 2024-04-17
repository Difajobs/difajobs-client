import { Box } from "@mui/material";
import { ProfileContainer } from "../../containers";
import styles from './ProfilePage.module.scss'

export default function ProfilePage() {
  return (
    <>
        <Box className={styles.root}>
          <ProfileContainer />
        </Box>
    </>
  )
}