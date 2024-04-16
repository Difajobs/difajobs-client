import { Box } from "@mui/material";
import { ProfileContainer } from "../../containers";
import styles from './ProfilePage.module.scss'
import AuthChecker from "../../utils/authChecker";

export default function ProfilePage() {
  return (
    <>
     <AuthChecker /> 
        <Box className={styles.root}>
          <ProfileContainer />
        </Box>
    </>
  )
}