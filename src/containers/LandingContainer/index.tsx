import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import hero from "../../assets/images/landing-hero.webp";
import styles from "./landingContainer.module.scss";
import { LandingCard, SkeletonComponent } from "../../components";
import { useEffect, useState } from "react";
import { jobList } from "../../utils/fetchApi";
import { useNavigate } from "react-router-dom";

export default function LandingContainer() {
  const [jobs, setJobs] = useState<[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const fecthJobs = async () => {
      try {
        const response = await jobList();
        if (response.success) {
          setJobs(response.data);
        } else {
          console.error("Failed to fetch jobs:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fecthJobs();
  }, []);
  const handleLogin = () => {
    navigate("/login");
  };
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
          {isLoading ? <SkeletonComponent /> : <LandingCard jobs={jobs} />}
        </Box>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#104152",
            width: "300px",
            alignSelf: "center",
            marginTop: "30px",
          }}
          onClick={handleLogin}
        >
          Masuk untuk melamar
        </Button>
      </Box>
    </Box>
  );
}
