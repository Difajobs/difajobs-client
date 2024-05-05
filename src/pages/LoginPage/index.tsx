import { Box } from "@mui/material";
import styles from './LoginPage.module.scss'
import { LoginContainer } from "../../containers";
import { NavBar } from "../../layouts";

export default function LoginPage() {
  return (
    <>
      <Box className={styles.loginPage}>
        <NavBar />
        <LoginContainer />
      </Box>
    </>
  )
}