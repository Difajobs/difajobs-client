import React, { useState, useEffect } from 'react';
import { Box, Grid } from "@mui/material";
import styles from './ProfileContainer.module.scss'
import { ProfileBio, ProfilePicture } from "../../components"
import { NavBar, Footer} from "../../layouts";
import { getUserProfile } from '../../utils/fetchApi';

export default function ProfileContainer() {

  const [userProfile, setUserProfile] = useState<{ name: string; email: string; location: string } | null>(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const profileData = await getUserProfile();
        setUserProfile(profileData);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchUserProfile();
  }, []);

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
                {userProfile ? (
                  <ProfilePicture
                    name={userProfile.name}
                    email={userProfile.email}
                    location={userProfile.location}
                  />
                ) : (
                  <p>Loading...</p>
                )}
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