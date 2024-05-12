import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import JobSearchBox from "../../components/JobSearchBox";
import { jobList } from "../../utils/fetchApi";
import { JobListComponent } from "../../components";
import DashboardSkeleton from "../../components/JobList/DashboardSkeleton";
import styles from './DashboardContainer.module.scss'
import { Job } from "../../utils/type";

const DashboardContainer: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await jobList();
        setJobs(data.data);
        setFilteredJobs(data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching job list:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (title: string, location: string) => {
    let filteredResults = jobs;

    if (title) {
      filteredResults = filteredResults.filter((job) =>
        job.title.toLowerCase().includes(title.toLowerCase())
      );
    }

    if (location) {
      filteredResults = filteredResults.filter((job) =>
        job.company.city.toLowerCase().includes(location.toLowerCase())
      );
    }

    setFilteredJobs(filteredResults);
  };

  return (
    <Box className={styles.dashboardContainer}>
      <JobSearchBox onSearch={handleSearch} />
      {loading ? (
        <DashboardSkeleton />
      ) : (
        <JobListComponent jobs={filteredJobs} />
      )}
    </Box>
  );
};

export default DashboardContainer;
