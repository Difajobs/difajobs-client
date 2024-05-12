import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import JobSearchBox from "../../components/JobSearchBox";
import { jobList } from "../../utils/fetchApi";
import { JobListComponent } from "../../components";
import DashboardSkeleton from "../../components/JobList/DashboardSkeleton";
import styles from './DashboardContainer.module.scss'

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
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error("Error fetching job list:", error);
        setLoading(false); // Also set loading to false on error
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
        <DashboardSkeleton /> // Render skeleton while loading
      ) : (
        <JobListComponent jobs={filteredJobs} />
      )}
    </Box>
  );
};

export default DashboardContainer;
