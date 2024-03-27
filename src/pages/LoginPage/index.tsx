import { Box } from "@mui/material";
import styles from './LoginPage.module.scss'
import { LoginContainer } from "../../containers";

export default function LoginPage() {
  return (
    <>
      <Box className={styles.loginPage}>
        <LoginContainer />
      </Box>
    </>
  )
}