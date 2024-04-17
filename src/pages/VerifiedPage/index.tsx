import { Box } from "@mui/material";
import AccountVerified from "../../components/AccountVerified";
import styles from './VerifiedPage.module.scss'

export default function index() {
  return (
    <>
      <Box className={styles.verifiedPage}>
        <AccountVerified />
      </Box>
    </>
  )
}
