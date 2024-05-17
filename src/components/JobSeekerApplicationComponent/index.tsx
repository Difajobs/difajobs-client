import { useState, useEffect } from 'react';
import { Box, Typography, Pagination, PaginationItem, Divider, CircularProgress } from '@mui/material';
import { getJobSeekerApplication } from '../../utils/fetchApi';
import { JobApplication } from '../../utils/type';
import styles from './JobSeekerApplicationComponent.module.scss';

export default function JobSeekerApplicationComponent() {
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await getJobSeekerApplication();
        setApplications(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch job seeker applications:", error);
        setError("Lamaran pekerjaan tidak ditemukan, silahkan melamar.");
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  const formatSalaryToIDR = (amount: number | null): string => {
    if (amount === null || isNaN(amount)) {
      return " ";
    }

    const formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0
    });

    return formatter.format(amount);
  };

  const totalPages = Math.ceil(applications.length / itemsPerPage);

  const handlePageChange = (_event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  if (loading) {
    return (
      <Box className={styles.loadingContainer}>
        <CircularProgress size={60} thickness={4} />
      </Box>
    );
  }

  if (error) {
    return <Typography className={styles.errorStatus}>{error}</Typography>;
  }

  return (
    <Box className={styles.container}>
      <Typography className={styles.title}> 
        Daftar Lamaran Pekerjaan
      </Typography>
      {applications.length === 0 ? (
        <Typography>No job applications found.</Typography>
      ) : (
        <>
          {applications
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .map((application, index) => (
              <Box className={styles.containerItemList} key={index}>
                <Box className={styles.itemList}>
                  <Typography className={styles.companyTitle}>{application.job.company.name}</Typography>
                  <Divider />
                  <Typography>Posisi Pekerjaan: {application.job.title}</Typography>
                  <Typography>
                    Pendapatan Perbulan: {formatSalaryToIDR(application.job.min_salary)} - {formatSalaryToIDR(application.job.max_salary)}
                  </Typography>
                  <Typography className={styles.itemStatus}>
                    Status Lamaran: <span className={styles.status}>{application.status.charAt(0).toUpperCase() + application.status.slice(1)}</span>
                  </Typography>
                </Box>
              </Box>
            ))}
          <Pagination
            className={styles.pagination}
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            variant='outlined'
            color='primary'
            renderItem={(item) => (
              <PaginationItem
                component="div"
                {...item}
                onClick={() => setCurrentPage(item.page as number)}
              />
            )}
          />
        </>
      )}
    </Box>
  );
}
