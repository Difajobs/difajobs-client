import React from "react";
import { Dialog, DialogTitle, DialogContent, Typography, Box, Button } from "@mui/material";
import { Job } from "../../utils/type";
import { formatDistanceToNow } from "date-fns";
import { id } from "date-fns/locale";
import styles from './JobDetailModal.module.scss'

interface JobDetailModalProps {
  job: Job | null;
  open: boolean;
  onClose: () => void;
}

const JobDetailModal: React.FC<JobDetailModalProps> = ({ job, open, onClose }) => {

  const formatDatePosted = (dateString: string) => {
    const date = new Date(dateString);
    return formatDistanceToNow(date, { addSuffix: true, locale: id });
  };

  const handleClose = () => {
    onClose();
  }

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
              <Typography>Pendapatan: {job.min_salary} - {job.max_salary}</Typography>
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
            <Button className={styles.button}>
              Lamar Pekerjaan
            </Button>
            <Button className={styles.button} onClick={handleClose}>
              Kembali
            </Button>
          </DialogContent>
        </>
      )}
    </Dialog>
  );
};

export default JobDetailModal;
