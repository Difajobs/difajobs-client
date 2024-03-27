import { Box } from "@mui/material";
import styles from "./RegisterPage.module.scss";
import { RegisterContainer } from "../../containers";

export default function RegisterPage() {
  return (
    <>
      <Box className={styles.registerPage}>
        <RegisterContainer />
      </Box>
    </>
  );
}
