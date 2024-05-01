import { Box, Grid } from "@mui/material";
import TentangSaya from "./TentangSaya";
import Keahlian from "./Keahlian";
import Disabilitas from "./Disabilitas";
import styles from './ProfileBio.module.scss';

interface ProfileBioProps {
  namaLengkap: string;
  nomorTelepon: string;
  kotaKabupaten: string;
  ttl: string;
  jenisKelamin: string;
  ringkasanPribadi: string;
}

export default function ProfileBio(props: ProfileBioProps) {
  const { namaLengkap, nomorTelepon, kotaKabupaten, ttl, jenisKelamin, ringkasanPribadi } = props;
  
  return (
    <>
      <Box>
        <Grid xs={6} md={4}>
          <Box className={styles.tentangsaya}>
           <TentangSaya 
             namaLengkap={namaLengkap} 
             nomorTelepon={nomorTelepon} 
             kotaKabupaten={kotaKabupaten} 
             ttl={ttl} 
             jenisKelamin={jenisKelamin} 
             ringkasanPribadi={ringkasanPribadi} 
           />
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
