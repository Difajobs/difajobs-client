import React, { useEffect, useState } from "react";
import { Avatar, Box, Divider, Typography } from "@mui/material";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import HearingIcon from "@mui/icons-material/Hearing";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import PsychologyIcon from "@mui/icons-material/Psychology";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import Pagination from "@mui/material/Pagination";
import { formatDistanceToNow } from "date-fns";
import { id } from "date-fns/locale";

import DashboardSkeleton from "./DashboardSkeleton/index";
import styles from "./JobList.module.scss";
import { jobList } from "../../utils/fetchApi";

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
  gender: string;
  list_ability: string[];
  required_skills: string[];
}

const JobListComponent: React.FC = () => {
  const maxDescriptionLength = 220;
  const itemsPerPage = 5;
  const [jobs, setJobs] = useState<Job[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await jobList();
        setJobs(data.data);
        setIsLoading(false); // Set loading to false once data is fetched
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

  const formatDatePosted = (dateString: string) => {
    const date = new Date(dateString);
    return formatDistanceToNow(date, { addSuffix: true, locale: id });
  };

  return (
    <>
      {isLoading ? (
        <DashboardSkeleton />
      ) : (
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
                      {job.gender === null ? (
                        <>
                          <MaleIcon sx={{ width: 20 }} />
                          <FemaleIcon sx={{ width: 20 }} />
                        </>
                      ) : job.gender === "laki-laki" ? (
                        <>
                          <MaleIcon sx={{ width: 20 }} />
                        </>
                      ) : (
                        <>
                          <FemaleIcon sx={{ width: 20 }} />
                        </>
                      )}
                    </Box>
                    <Box className={styles.otherIcons}>
                      {job.list_ability.length > 0 &&
                        job.list_ability.map((ability: string, index: number) => {
                          let icon;
                          switch (ability) {
                            case "mobilitas":
                              icon = (
                                <DirectionsWalkIcon key={index} sx={{ width: 20 }} />
                              );
                              break;
                            case "penglihatan":
                              icon = (
                                <VisibilityIcon key={index} sx={{ width: 20 }} />
                              );
                              break;
                            case "pendengaran":
                              icon = <HearingIcon key={index} sx={{ width: 20 }} />;
                              break;
                            case "berbicara":
                              icon = (
                                <RecordVoiceOverIcon key={index} sx={{ width: 20 }} />
                              );
                              break;
                            case "kesehatan rohani":
                              icon = (
                                <PsychologyIcon key={index} sx={{ width: 20 }} />
                              );
                              break;
                            default:
                              icon = null;
                          }
                          return icon;
                        })}
                    </Box>
                  </Box>
                  <Divider className={styles.divider} />
                  <Box className={styles.addressWrapper}>
                    <Typography className={styles.location}>
                      {job.company.city}
                    </Typography>
                    <Typography className={styles.time}>
                      {formatDatePosted(job.date_posted)}
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
      )}
    </>
  );
};

export default JobListComponent;
