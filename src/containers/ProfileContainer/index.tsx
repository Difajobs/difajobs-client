import { Box } from "@mui/material";
import styles from './ProfileContainer.module.scss'
import { Header } from "../../components";

export default function ProfileContainer() {
  return (
    <>
      <Box className={styles.root}>
        <Header />
      </Box>
    </>
  )
}