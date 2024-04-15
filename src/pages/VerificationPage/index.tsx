import { Box } from "@mui/material";
import { VerificationContainer } from "../../containers";
import styles from './VerificationPage.module.scss'

export default function VerificationPage() {
  return (
    <>
      <Box className={styles.verificationPage}>
        <VerificationContainer />
      </Box>
    </>
  )
}