import { Box, Grid } from "@mui/material";
import TentangSaya from "./TentangSaya";
import Keahlian from "./Keahlian";
import Disabilitas from "./Disabilitas";
import styles from './ProfileBio.module.scss';

export default function ProfileBio() {
  return (
    <>
      <Box>
        <Grid xs={6} md={4}>
          <Box className={styles.tentangsaya}>
           <TentangSaya />
          </Box>
        </Grid>
        <Grid xs={6} md={4}>
          <Box className={styles.keahlian}>
           <Keahlian />
          </Box>
        </Grid>
        <Grid xs={6} md={4}>
          <Box className={styles.disabilitas}>
           <Disabilitas />
          </Box>
        </Grid>
      </Box>
    </>
  )
}