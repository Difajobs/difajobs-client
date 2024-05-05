import { Box } from "@mui/material";
import { Footer, NavBar } from "../../layouts";
import { LandingContainer } from "../../containers";

export default function LandingPage() {
  return (
    <Box>
      <NavBar />
      <LandingContainer />
      <Footer />
    </Box>
  );
}
