import { Box } from "@mui/material";
import styles from "./RegisterPage.module.scss";
import { GoogleRegisterContainer } from "../../containers";

export default function GoogleRegisterPage() {
  return (
    <>
      <Box className={styles.registerPage}>
        <GoogleRegisterContainer />
      </Box>
    </>
  );
}
