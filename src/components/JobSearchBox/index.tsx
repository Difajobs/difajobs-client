import React, { useState } from "react";
import { Box, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./JobSearchBox.module.scss";

interface JobSearchBoxProps {
  onSearch: (title: string, location: string) => void;
}

const JobSearchBox: React.FC<JobSearchBoxProps> = ({ onSearch }) => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    onSearch(title, location);
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    onSearch(event.target.value, location);
  };

  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
    onSearch(title, event.target.value);
  };

  return (
    <Box className={styles.container}>
      <TextField
        className={styles.textField}
        placeholder="Posisi Pekerjaan"
        value={title}
        onChange={handleTitleChange}
      />
      <TextField
        className={styles.textField}
        placeholder="Lokasi"
        value={location}
        onChange={handleLocationChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon onClick={handleSearch} />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default JobSearchBox;
