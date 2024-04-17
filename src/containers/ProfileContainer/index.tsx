import { Box, Grid } from "@mui/material";
import styles from './ProfileContainer.module.scss'
import { ProfileBio, ProfilePicture } from "../../components"
import { NavBar, Footer} from "../../layouts";

export default function ProfileContainer() {
  return (
    <>
      <Box>
        <Grid xs={6} md={8}>
          <Box className={styles.navbar}>
           <NavBar />
          </Box>
        </Grid>
          <Box>
              <Grid xs={6} md={4} className={styles.avatar}> 
                    <Box className={styles.profile}>
                      <ProfilePicture 
                      name="John Doe"
                      email="johndoe@email.com"
                      location="East Java, Indonesia"
                      />
                    </Box>
              </Grid>
              <Grid xs={6} md={4}> 
                <Box className={styles.tentangsaya}>
                    <ProfileBio/>
                </Box>
              </Grid>
          </Box>   
          <Grid xs={6} md={8}>
          <Box className={styles.footer}>
           <Footer />
          </Box>
        </Grid>
      </Box>
    </>
  )
}