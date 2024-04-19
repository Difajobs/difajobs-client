import React from "react";
import Box from "@mui/material/Box";
import { Avatar, Divider, Typography } from "@mui/material";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import HearingDisabledIcon from "@mui/icons-material/HearingDisabled";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import AccessibleIcon from "@mui/icons-material/Accessible";
import PsychologyIcon from "@mui/icons-material/Psychology";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import { formatDistanceToNow } from "date-fns";
import { id } from "date-fns/locale";
import styles from "./landingCard.module.scss";

interface Job {
  id: number;
  title: string;
  description: string;
  employment_type: string;
  min_salary: string;
  gender: string;
  max_salary: string;
  date_posted: string;
  company: {
    name: string;
    city: string;
    logo: string;
  };
  list_ability: string[];
  required_skills: string[];
}

interface JobsProps {
  jobs: Job[] | null;
}

const LandingCard: React.FC<JobsProps> = ({ jobs }) => {
  const limitedJobs = jobs?.slice(0, 5);

  const formatDatePosted = (dateString: string) => {
    const date = new Date(dateString);
    return formatDistanceToNow(date, { addSuffix: true, locale: id });
  };

  return (
    <Box className={styles.container}>
      {limitedJobs?.map((job: Job) => (
        <Box key={job.id} className={styles.card}>
          <Box className={styles.company}>
            <Avatar className={styles.avatar}>
              {<img src={job.company.logo} width={40} /> ||
                job.company.name.charAt(0)}
            </Avatar>
            <Box className={styles.companyDetail}>
              <Typography variant="body1" className={styles.role}>
                {job.title}
              </Typography>
              <Typography variant="body2" className={styles.name}>
                {job.company.name}
              </Typography>
            </Box>
          </Box>
          <Box className={styles.requirement}>
            <Box className={styles.jobInfo}>
              <Typography variant="body2" className={styles.location}>
                {job.company.city}
              </Typography>
              <Typography variant="body2" className={styles.date}>
                {formatDatePosted(job.date_posted)}
              </Typography>
            </Box>
            <Box className={styles.jobReq}>
              <Typography className={styles.gender}>
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
              </Typography>
              <Divider className={styles.divider} />
              <Typography className={styles.ability}>
                {job.list_ability.length > 0 &&
                  job.list_ability.map((ability: string, index: number) => {
                    let icon;
                    switch (ability) {
                      case "mobilitas":
                        icon = (
                          <AccessibleIcon key={index} sx={{ width: 20 }} />
                        );
                        break;
                      case "penglihatan":
                        icon = (
                          <VisibilityOffIcon key={index} sx={{ width: 20 }} />
                        );
                        break;
                      case "pendegaran":
                        icon = (
                          <HearingDisabledIcon key={index} sx={{ width: 20 }} />
                        );
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
              </Typography>
            </Box>
          </Box>
          <Box className={styles.description}>
            <Typography variant="body2" className={styles.jobDesc}>
              {job.description}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default LandingCard;
