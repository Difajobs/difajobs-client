import React, { useState, useEffect } from 'react';
import { Box, Grid, Button, TextField, Typography } from "@mui/material";
import styles from './ProfileContainer.module.scss';
import { ProfileBio, ProfilePicture } from "../../components";
import { NavBar, Footer} from "../../layouts";
import CircularProgress from '@mui/material/CircularProgress';
import { getUserProfile, updateUserProfile } from '../../utils/fetchApi';

export default function ProfileContainer() {
  const [userProfile, setUserProfile] = useState<{
    [x: string]: string;
    userEmail: string; 
    name: string; 
    email: string; 
    city: string; 
    phone: string;
    gender: string;
    description: string;
    dob: string;
    keahlian: string;
    sertifikat: string;
    disabilities: string;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const profileData = await getUserProfile();
        const userEmail = profileData.data.user?.email || "";
        const disabilities = profileData.data.disabilities.map((disability: string) => `- ${disability}`).join('\n');
        const keahlian = profileData.data.job_seeker_skills.map((job_seeker_skills: string) => `- ${job_seeker_skills}`).join('\n');
        const sertifikat = profileData.data.certificates.map((cert: { name: string }) => `- ${cert.name}`).join('\n');

        setUserProfile({ 
          userEmail,
          name: profileData.data.fullname,
          email: profileData.data.email,
          city: profileData.data.city,
          phone: profileData.data.phone_number,
          gender: profileData.data.gender,
          description: profileData.data.description,
          dob: profileData.data.dob,
          keahlian,
          sertifikat,
          disabilities
        });
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching user profile:", error);
        setIsLoading(false); 
      }
    };
  
    fetchUserProfile();
  }, []);

  const handleUpdateProfile = async () => {
    if (!userProfile) return;
  
    const updatedProfile = {
      phone_number: userProfile.phone,
      city: userProfile.city,
      description: userProfile.description,
    };
  
    try {
      const response = await updateUserProfile(updatedProfile);
  
      if (response.ok) {
        console.log(response.data);
        alert('Profile updated successfully!');
        setIsEditing(false);
      } else {
        console.error("Server error response:", response.data);
        alert('Failed to update profile. Server error.');
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error updating user profile:", error.message);
        alert('Failed to update profile. Please try again later.');
      } else {
        console.error("Unknown error:", error);
        alert('An unknown error occurred. Please try again later.');
      }
    }
  };
  
  
  return (
    <Box>
      <Grid xs={12} md={8}>
        <Box className={styles.navbar}>
          <NavBar />
        </Box>
      </Grid>
      <Box>
        {isLoading ? (
          <Box className={styles.loading}>
            <CircularProgress />
          </Box>
        ) : (
          <Grid item xs={12} md={4}>
            <Grid xs={6} md={4} className={styles.avatar}> 
              <Box className={styles.profile}>
                {userProfile && ( 
                  <ProfilePicture
                    name={userProfile.name}
                    email={userProfile.userEmail}
                    location={userProfile.city}
                  />
                )}
              </Box>
            </Grid>
            <Grid xs={6} md={4}> 
              <Box className={styles.tentangsaya}>
                {userProfile && (
                  isEditing ? (
                    <Box>
                        <Box className={styles.tentangsaya2}>
                          <Grid item xs={12} md={6}>
                                <Box className={styles.tentangsaya}>
                                    <Typography className={styles.inputLabel}>
                                      Nomor Telfon
                                    </Typography>
                                    <TextField
                                      className={styles.inputfield}
                                      variant="outlined"
                                      InputProps={{ style: { borderRadius: '10px', height: '42px' } }}
                                      value={userProfile.phone}
                                      onChange={(e) => setUserProfile({ ...userProfile, phone: e.target.value })}
                                    />
                                    <Typography className={styles.inputLabel}>
                                      Kota / Kabupaten
                                    </Typography>
                                    <TextField
                                      className={styles.inputfield}
                                      variant="outlined"
                                      InputProps={{ style: { borderRadius: '10px', height: '42px' } }}
                                      value={userProfile.city}
                                      onChange={(e) => setUserProfile({ ...userProfile, city: e.target.value })}
                                    />
                                    <Typography className={styles.inputLabel}>
                                      Ringkasan Pribadi
                                    </Typography>
                                    <TextField
                                      className={styles.inputfield}
                                      variant="outlined"
                                      InputProps={{ style: { borderRadius: '10px', height: '42px' } }}
                                      value={userProfile.description}
                                      multiline
                                      onChange={(e) => setUserProfile({ ...userProfile, description: e.target.value })}
                                    />

                                </Box>
                          </Grid>
                        </Box>
                      <Grid xs={12} md={8}>
                      <Button onClick={handleUpdateProfile}>Save</Button>
                      </Grid>
                    </Box>
                  ) : (
                    <ProfileBio
                      namaLengkap={userProfile.name} 
                      nomorTelepon={userProfile.phone} 
                      kotaKabupaten={userProfile.city}
                      ttl={userProfile.dob}  
                      jenisKelamin={userProfile.gender}  
                      ringkasanPribadi={userProfile.description}      
                      keahlian={userProfile.keahlian}
                      sertifikat={userProfile.sertifikat}
                      disabilities={userProfile.disabilities}
                    />
                  )
                )}
              </Box>
            </Grid>
          </Grid>
        )}
      </Box>   
      <Grid xs={12} md={8}>
        <Box className={styles.UpdateButton}>
          <Button
            className={styles.Button}
            variant="contained"
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? 'BACK' : 'Update Profile'}
          </Button>
        </Box>
      </Grid>
      <Grid xs={12} md={8}>
        <Box className={styles.footer}>
          <Footer />
        </Box>
      </Grid>
    </Box>
  );
  }