import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import styles from "./skeleton.module.scss";

export default function SkeletonComponent() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid container spacing={1} className={styles.container}>
        {[1, 2, 3, 4].map(index => (
          <Skeleton
            key={index}
            sx={{ bgcolor: "grey.900" }}
            variant="rectangular"
            className={styles.card}
          />
        ))}
      </Grid>
    </Box>
  );
}
