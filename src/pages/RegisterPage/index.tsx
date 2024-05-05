import { Box } from "@mui/material";
import styles from "./RegisterPage.module.scss";
import { RegisterContainer } from "../../containers";
import { NavBar } from "../../layouts";

export default function RegisterPage() {
  return (
    <>
      <Box className={styles.registerPage}>
        <NavBar />
        <RegisterContainer />
      </Box>
    </>
  );
}
