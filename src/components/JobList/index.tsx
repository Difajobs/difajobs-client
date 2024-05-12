import React from "react";
import { Box, Avatar, Typography, Divider } from "@mui/material";
import {
  Male as MaleIcon,
  Female as FemaleIcon,
  Hearing as HearingIcon,
  Visibility as VisibilityIcon,
  DirectionsWalk as DirectionsWalkIcon,
  Psychology as PsychologyIcon,
  RecordVoiceOver as RecordVoiceOverIcon
} from "@mui/icons-material";
import { formatDistanceToNow } from "date-fns";
import { id } from "date-fns/locale";
import Pagination from "@mui/material/Pagination";
import styles from "./JobList.module.scss";

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

interface JobListComponentProps {
  jobs: Job[];
}

const JobListComponent: React.FC<JobListComponentProps> = ({ jobs }) => {
  const maxDescriptionLength = 220;
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = React.useState(1);

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
      {jobs.length === 0 ? (
        <Typography>
          Tidak Ada Lowongan Pekerjaan
        </Typography>
      ) : (
        <Box className={styles.container}>
          {currentJobs.map((job: Job, index: number) => (
            <Box key={index} className={styles.jobList}>
              <Box className={styles.userInfo}>
                <Box className={styles.avatarInfo}>
                  <Avatar className={styles.avatar}>
                    <img src={job.company.logo} alt="Company Logo" width={50} />
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
                      {job.gender === "laki-laki" ? (
                        <MaleIcon sx={{ width: 20 }} />
                      ) : job.gender === "perempuan" ? (
                        <FemaleIcon sx={{ width: 20 }} />
                      ) : null}
                    </Box>
                    <Box className={styles.otherIcons}>
                      {job.list_ability.map((ability: string, index: number) => {
                        let icon = null;
                        switch (ability) {
                          case "mobilitas":
                            icon = <DirectionsWalkIcon key={index} sx={{ width: 20 }} />;
                            break;
                          case "penglihatan":
                            icon = <VisibilityIcon key={index} sx={{ width: 20 }} />;
                            break;
                          case "pendengaran":
                            icon = <HearingIcon key={index} sx={{ width: 20 }} />;
                            break;
                          case "berbicara":
                            icon = <RecordVoiceOverIcon key={index} sx={{ width: 20 }} />;
                            break;
                          case "kesehatan rohani":
                            icon = <PsychologyIcon key={index} sx={{ width: 20 }} />;
                            break;
                          default:
                            break;
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
