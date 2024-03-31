import { Box, Grid } from "@mui/material";
import styles from './ProfileContainer.module.scss'
import { ProfilePicture } from "../../components"
import { NavBar } from "../../layouts";

export default function ProfileContainer() {
  return (
    <>
      <Box>
      <NavBar />
        <Box style={{ maxHeight: '100vh', overflowY: 'auto', scrollbarWidth: 'none' }} className={styles.root}>
            <Grid xs={6} md={4}> 
              <Box className={styles.profile} style={{ marginTop: '6rem' }}>
              <ProfilePicture 
              name="John Doe"
              email="johndoe@email.com"
              location="East Java, Indonesia"
              />
              </Box>
            </Grid>
        </Box>
      </Box>
    </>
  )
}