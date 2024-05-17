// JobDetailModal.tsx
import React, { useEffect, useState } from "react";
import { Dialog, DialogTitle, DialogContent, Typography, Box, Button } from "@mui/material";
import { formatDistanceToNow } from "date-fns";
import { id } from "date-fns/locale";
import styles from './JobDetailModal.module.scss';
import ApplyJobComponent from "../ApplyJobComponent";
import { decodeToken } from "../../utils/jwtUtils";
import { Job } from "../../utils/type";

interface JobDetailModalProps {
  job: Job | null;
  open: boolean;
  onClose: () => void;
  token: string | null; // Adjusted type to accept null
}

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

const JobDetailModal: React.FC<JobDetailModalProps> = ({ token, job, open, onClose }) => {
  const [isApplying, setIsApplying] = useState(false);
  const [userRole, setUserRole] = useState<string | null>(null);

  useEffect(() => {
    if (token) {
      const decodedToken = decodeToken(token);
      if (decodedToken) {
        const role = decodedToken.role;
        setUserRole(role);
      } else {
        // Invalid token feedback
        console.error('Invalid token');
      }
    }
  }, [token]);

  const handleApplyClick = () => {
    setIsApplying(true);
  };

  const handleApplicationClose = () => {
    setIsApplying(false);
  };

  const formatDatePosted = (dateString: string) => {
    const date = new Date(dateString);
    return formatDistanceToNow(date, { addSuffix: true, locale: id });
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog className={styles.jobDetailContainer} open={open} onClose={onClose} maxWidth="md" fullWidth>
      {job && (
        <>
          <DialogTitle className={styles.title}>{job.company.name}</DialogTitle>
          <DialogContent dividers>
            <Box>
              <Typography>Posisi Pekerjaan: {job.title}</Typography>
              <Typography>Lokasi: {job.company.city}</Typography>
              <Typography>Tipe Pekerjaan: {job.employment_type}</Typography>
              <Typography>
                Pendapatan Perbulan: {formatSalaryToIDR(job.min_salary)} - {formatSalaryToIDR(job.max_salary)}
              </Typography>
              <Typography>Lowongan dibuat:  {formatDatePosted(job.date_posted)}</Typography>
              <Typography>Gender: {job.gender}</Typography>
            </Box>
            <Box mt={2}>
              <Typography>Deskripsi Pekerjaan</Typography>
              {job.description}
            </Box>
            <Box mt={2}>
              <Typography>Kemampuan fisik yang dibutuhkan:</Typography>
              <ul>
                {job.list_ability.map((ability, index) => (
                  <li key={index}>{ability}</li>
                ))}
              </ul>
            </Box>
            <Box mt={2}>
              <Typography>Keahlian yang dibutuhkan:</Typography>
              <ul>
                {job.required_skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </Box>
            {userRole === "job seeker" && (
              <Button className={styles.button} onClick={handleApplyClick}>
                Lamar Pekerjaan
              </Button>
            )}
            <Button className={styles.button} onClick={handleClose}>
              Kembali
            </Button>
          </DialogContent>
        </>
      )}

      <ApplyJobComponent job_id={job?.id || 0} open={isApplying} onClose={handleApplicationClose} />
    </Dialog>
  );
};

export default JobDetailModal;
