import { Box, InputAdornment, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import styles from './JobSearchBox.module.scss'

export default function JobSearchBox() {
  return (
    <>
      <Box className={styles.container}>
        <TextField className={styles.textField}
          placeholder="Posisi Pekerjaan" />
        <TextField
          className={styles.textField}
          placeholder="Lokasi"
          InputProps={{
            endAdornment: (
              <InputAdornment
                position="end">
                <SearchIcon />
              </InputAdornment>
            )
          }}
        />
      </Box>
    </>
  )
}
