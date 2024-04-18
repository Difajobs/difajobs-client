import { Avatar, Box, Divider, Typography } from "@mui/material";
import HearingDisabledIcon from "@mui/icons-material/HearingDisabled";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import AccessibleIcon from "@mui/icons-material/Accessible";
import PsychologyIcon from "@mui/icons-material/Psychology";
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import styles from './JobList.module.scss';
import Pagination from '@mui/material/Pagination';
import React, { useState } from 'react';

export default function JobListComponent() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Change this value to adjust the number of items per page
  const maxDescriptionLength = 220;

  const handleChangePage = (_event: React.ChangeEvent<unknown>, newPage: number) => {
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <>
      <Box className={styles.container}>
        {dummyData.slice(startIndex, endIndex).map((job, index) => (
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
        <Pagination
          className={styles.pagination}
          count={Math.ceil(dummyData.length / itemsPerPage)}
          page={currentPage}
          onChange={handleChangePage}
        />
      </Box>
    </>
  )
}

// Dummy data
const dummyData = [
  {
    name: "John Doe",
    role: "Software Engineer",
    company: "ABC Company",
    location: "New York",
    time: "2 days ago",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    name: "Jane Smith",
    role: "UI/UX Designer",
    company: "XYZ Inc.",
    location: "San Francisco",
    time: "1 week ago",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    name: "Jane Smith",
    role: "UI/UX Designer",
    company: "XYZ Inc.",
    location: "San Francisco",
    time: "1 week ago",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    name: "Jane Smith",
    role: "UI/UX Designer",
    company: "XYZ Inc.",
    location: "San Francisco",
    time: "1 week ago",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    name: "Jane Smith",
    role: "UI/UX Designer",
    company: "XYZ Inc.",
    location: "San Francisco",
    time: "1 week ago",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    name: "Jane Smith",
    role: "UI/UX Designer",
    company: "XYZ Inc.",
    location: "San Francisco",
    time: "1 week ago",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    name: "Jane Smith",
    role: "UI/UX Designer",
    company: "XYZ Inc.",
    location: "San Francisco",
    time: "1 week ago",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    name: "Jane Smith",
    role: "UI/UX Designer",
    company: "XYZ Inc.",
    location: "San Francisco",
    time: "1 week ago",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    name: "Jane Smith",
    role: "UI/UX Designer",
    company: "XYZ Inc.",
    location: "San Francisco",
    time: "1 week ago",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
];