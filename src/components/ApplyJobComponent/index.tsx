import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, Button } from '@mui/material';
import { JobSeekerApply } from '../../utils/fetchApi';
import styles from './JobSeekerApplication.module.scss'

interface JobApplicationModalProps {
  job_id: number;
  open: boolean;
  onClose: () => void;
}

const ApplyJobComponent: React.FC<JobApplicationModalProps> = ({ job_id, open, onClose }) => {
  const [coverLetter, setCoverLetter] = useState('');

  const handleApplyClick = async () => {
    try {
      await JobSeekerApply(job_id, { cover_letter: coverLetter });
      onClose();
    } catch (error) {
      console.error('Failed to apply:', error);
    }
  };
  const handleClose = () => {
    onClose();
  }

  return (
    <Dialog
      className={styles.dialog}
      open={open}
      maxWidth='lg'
      fullWidth
      onClose={onClose}>
      <DialogTitle className={styles.dialogTitle}>Kirim Surat Lamaran</DialogTitle>
      <DialogContent className={styles.dialogContent}>
        <TextField
          className={styles.textField}
          multiline
          rows={20}
          variant="outlined"
          fullWidth
          value={coverLetter}
          onChange={(e) => setCoverLetter(e.target.value)}
        />
        <Button className={styles.button} variant="contained" onClick={handleApplyClick}>
          Kirim Lamaran
        </Button>
        <Button className={styles.button} variant="contained" onClick={handleClose}>
          Kembali
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default ApplyJobComponent;
