import React, { useState, useEffect } from 'react';
import { Box, Grid } from "@mui/material";
import styles from './ProfileContainer.module.scss';
import { ProfileBio, ProfilePicture } from "../../components";
import { NavBar, Footer} from "../../layouts";
import { getUserProfile } from '../../utils/fetchApi';

export default function ProfileContainer() {
  const [userProfile, setUserProfile] = useState<{
    userEmail: string; 
    name: string; 
    email: string; 
    city: string; 
    phone: string;
    gender: string;
    description: string;
    dob: string;
  } | null>(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const profileData = await getUserProfile();
        const userEmail = profileData.data.user?.email || "";
        setUserProfile({ 
          userEmail,
          name: profileData.data.fullname,
          email: profileData.data.email,
          city: profileData.data.city,
          phone: profileData.data.phone_number,
          gender: profileData.data.gender,
          description: profileData.data.description,
          dob: profileData.data.dob,
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
                  name={userProfile?.name || ""}
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
              {userProfile ? (
                <ProfileBio
                  namaLengkap={userProfile.name} 
                  nomorTelepon={userProfile.phone} 
                  kotaKabupaten={userProfile?.city || ""}
                  ttl={userProfile.dob}  
                  jenisKelamin={userProfile.gender}  
                  ringkasanPribadi={userProfile.description}                
                  />
              ) : (
                <p>Loading...</p>
              )}
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
