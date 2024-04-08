import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import styles from "./UploadButton.module.scss";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

interface UploadButtonProps {
  buttonText: string;
}

export default function UploadButton({ buttonText }: UploadButtonProps) {
  return (
    <Button
      className={styles.uploadButton}
      component="label"
      role={undefined}
      variant="outlined"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
    >
      {buttonText}
      <VisuallyHiddenInput type="file" accept="image/*" />
    </Button>
  );
}
