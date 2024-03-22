import { Box } from "@mui/material";
import { NotFoundContainer } from "../../containers";
import styles from './NotFoundPage.module.scss'

export default function NotFoundPage() {
  return (
    <>
      <Box className={styles.notFoundPage}>
        <NotFoundContainer />
      </Box>
    </>
  )
}