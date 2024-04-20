import React, { useEffect, useState } from "react";
import { Avatar, Box, Divider, Typography } from "@mui/material";
import HearingDisabledIcon from "@mui/icons-material/HearingDisabled";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import AccessibleIcon from "@mui/icons-material/Accessible";
import PsychologyIcon from "@mui/icons-material/Psychology";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import styles from "./JobList.module.scss";
import { jobList } from "../../utils/fetchApi";
import Pagination from "@mui/material/Pagination";

interface Job {
  id: number;
  company: {
    name: string;
    city: string;
    logo: string;
  };
  title: string;
  description: string;
  employment_type: string;
  min_salary: string;
  max_salary: string;
  date_posted: string;
}

const JobListComponent: React.FC = () => {
  const maxDescriptionLength = 220;
  const itemsPerPage = 5; // Number of items per page
  const [jobs, setJobs] = useState<Job[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await jobList();
        setJobs(data.data);
      } catch (error) {
        console.error("Error fetching job list:", error);
      }
    };

    fetchData();
  }, []);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentJobs = jobs.slice(startIndex, endIndex);

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Box className={styles.container}>
        {currentJobs.map((job: Job, index: number) => (
          <Box key={index} className={styles.jobList}>
            <Box className={styles.userInfo}>
              <Box className={styles.avatarInfo}>
                <Avatar className={styles.avatar}>
                  {<img src={job.company.logo} width={50} />}
                </Avatar>
                <Box className={styles.userDetails}>
                  <Typography className={styles.userName}>
                    {job.company.name}
                  </Typography>
                  <Typography className={styles.companyName}>
                    {job.title} at {job.company.name}
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
                    {job.company.city}
                  </Typography>
                  <Typography className={styles.time}>
                    {new Date(job.date_posted).toLocaleDateString()}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Typography className={styles.jobDescription}>
              {job.description.length > maxDescriptionLength
                ? `${job.description.slice(0, maxDescriptionLength)}...`
                : job.description}
            </Typography>
          </Box>
        ))}
        <Pagination
          className={styles.pagination}
          count={Math.ceil(jobs.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          variant="outlined"
          color="primary"
        />
      </Box>
    </>
  );
};

export default JobListComponent;
