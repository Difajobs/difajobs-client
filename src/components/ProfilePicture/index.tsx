import React from 'react';
import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';
import styles from './ProfilePicture.module.scss';

const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
`;

interface Props {
  name: string;
  email: string;
  location: string;
}

const ProfilePicture: React.FC<Props> = ({ name, email, location }) => {
  return (
    <Box className={styles.root}>
      <Box display="flex" justifyContent="center">
        <Image className={styles.avatar} src="https://iili.io/Jrg0dgV.md.png" alt="Profile" />
      </Box>
      <Typography className={styles.profile} variant="h5">{name}</Typography>
      <Typography className={styles.profile} variant="body1">{email}</Typography>
      <Typography className={styles.profile} variant="body1">{location}</Typography>
    </Box>
  );
};

export default ProfilePicture;