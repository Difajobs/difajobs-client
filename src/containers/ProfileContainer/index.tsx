import React, { useState, useEffect } from 'react';
import { Box, Grid } from "@mui/material";
import styles from './ProfileContainer.module.scss';
import { ProfileBio, ProfilePicture } from "../../components";
import { NavBar, Footer} from "../../layouts";
import { getUserProfile } from '../../utils/fetchApi';

export default function ProfileContainer() {
  const [userProfile, setUserProfile] = useState<{
    userEmail: string; fullname: string; email: string; city: string 
  } | null>(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const profileData = await getUserProfile();
        const userEmail = profileData.data.user?.email || "";
        setUserProfile({ 
          userEmail,
          fullname: profileData.data.fullname,
          email: profileData.data.email,
          city: profileData.data.city
        });
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };
  
    fetchUserProfile();
  }, []);

  return (
    <Box>
      <Grid xs={12} md={8}>
        <Box className={styles.navbar}>
          <NavBar />
        </Box>
      </Grid>
      <Box>
        <Grid item xs={12} md={4}>
          <Grid xs={6} md={4} className={styles.avatar}> 
            <Box className={styles.profile}>
              {userProfile ? (
                <ProfilePicture
                  name={userProfile?.fullname || ""}
                  email={userProfile?.userEmail || ""}
                  location={userProfile?.city || ""}
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
        </Grid>
      </Box>   
      <Grid xs={12} md={8}>
        <Box className={styles.footer}>
          <Footer />
        </Box>
      </Grid>
    </Box>
  );
}
