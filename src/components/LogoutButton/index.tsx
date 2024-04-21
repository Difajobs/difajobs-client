import { Box, Button, Modal, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import styles from "./LogoutButton.module.scss";
import React from "react";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  maxWidth: "400px",
  bgcolor: "background.paper",
  p: 4,
};

export default function LogoutButton() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const removeToken = () => {
    localStorage.removeItem("token");
    handleClose();
    navigate("/");
  };

  return (
    <>
      <Button className={styles.logoutButton} onClick={handleOpen}>
        <LogoutIcon /> Keluar
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography sx={{ margin: "20px" }}>
            Apakah anda ingin keluar?
          </Typography>
          <Box>
            <Button
              sx={{
                margin: "0px 10px",
                backgroundColor: "rgb(165, 24, 24)",
                color: "white",
                "&:hover": { backgroundColor: "rgb(114, 11, 11)" },
              }}
              onClick={removeToken}
            >
              Keluar
            </Button>
            <Button
              sx={{
                margin: "0px 10px",
              }}
              onClick={handleClose}
            >
              Tidak
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
