import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import hero from "../../assets/images/landing-hero.webp";
import styles from "./landingContainer.module.scss";
import { LandingCard } from "../../components";
import { useEffect, useState } from "react";
import { jobList } from "../../utils/fetchApi";

export default function LandingContainer() {
  const [jobs, setJobs] = useState<[] | null>(null);
  useEffect(() => {
    const fecthJobs = async () => {
      const joblisting = await jobList();
      setJobs(joblisting);
    };
    fecthJobs();
  }, []);
  return (
    <Box className={styles.container}>
      <Box className={styles.about}>
        <img alt="Difajobs" src={hero} className={styles.hero} />
        <Box className={styles.description}>
          <Typography variant="h4" className={styles.title}>
            Difa Jobs
          </Typography>
          <Typography variant="body1" className={styles.detail}>
            Selamat datang di <span className={styles.subTitle}>Difa Jobs</span>
            , tempat di mana kesempatan bertemu dengan potensi, dan di mana
            keberagaman dihargai dan diberdayakan. Kami adalah portal pekerjaan
            yang berkomitmen untuk membangun jembatan antara talenta yang luar
            biasa dan peluang pekerjaan yang inklusif. Dalam era di mana setiap
            individu harus memiliki akses yang setara terhadap kesempatan karir,
            kami mempersembahkan platform inovatif ini sebagai solusi bagi
            penyandang cacat/disabilitas untuk menemukan pekerjaan yang sesuai
            dengan kemampuan dan keinginan mereka.
          </Typography>
        </Box>
      </Box>
      <Box className={styles.jobs}>
        <Typography variant="h5" className={styles.recent}>
          Lowongan Terbaru :
        </Typography>
        <Box className={styles.joblist}>
          <LandingCard jobs={jobs} />
        </Box>
      </Box>
    </Box>
  );
}
