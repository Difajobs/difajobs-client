import { Box } from "@mui/material";
import { Verification } from "../../components";
import styles from './VerifyContainer.module.scss'

export default function VerifyContainer() {
  return (
    <Box className={styles.verificationContainer}>
      <Verification />
    </Box>
  )
}
