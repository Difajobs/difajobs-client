import React from 'react';
import { Avatar, Box, Divider, Typography } from "@mui/material";
import HearingDisabledIcon from "@mui/icons-material/HearingDisabled";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import AccessibleIcon from "@mui/icons-material/Accessible";
import PsychologyIcon from "@mui/icons-material/Psychology";
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import styles from './JobList.module.scss';
import dummyData from './dummyData';

interface Job {
  name: string;
  role: string;
  company: string;
  location: string;
  time: string;
  description: string;
}

interface JobListComponentProps {
  startIndex: number;
  endIndex: number;
}

const JobListComponent: React.FC<JobListComponentProps> = ({ startIndex, endIndex }) => {
  const maxDescriptionLength = 220;

  return (
    <>
      <Box className={styles.container}>
        {dummyData.slice(startIndex, endIndex).map((job: Job, index: number) => (
          <Box key={index} className={styles.jobList}>
            <Box className={styles.userInfo}>
              <Box className={styles.avatarInfo}>
                <Avatar className={styles.avatar}>
                  {job.name.charAt(0)}
                </Avatar>
                <Box className={styles.userDetails}>
                  <Typography className={styles.userName}>
                    {job.name}
                  </Typography>
                  <Typography className={styles.companyName}>
                    {job.role} at {job.company}
                  </Typography>
                </Box>
              </Box>
              <Box className={styles.iconsInfo}>
                <Box className={styles.iconWrapper}>
                  <Box className={styles.genderIcons}>
                    <MaleIcon />
                    <FemaleIcon />
                  </Box>
                  <Box className={styles.otherIcons}>
                    <HearingDisabledIcon />
                    <VisibilityOffIcon />
                    <AccessibleIcon />
                    <PsychologyIcon />
                  </Box>
                </Box>
                <Divider className={styles.divider} />
                <Box className={styles.addressWrapper}>
                  <Typography className={styles.location}>
                    {job.location}
                  </Typography>
                  <Typography className={styles.time}>
                    {job.time}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Typography className={styles.jobDescription}>
              {job.description.length > maxDescriptionLength ?
                `${job.description.slice(0, maxDescriptionLength)}...` :
                job.description
              }
            </Typography>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default JobListComponent;
