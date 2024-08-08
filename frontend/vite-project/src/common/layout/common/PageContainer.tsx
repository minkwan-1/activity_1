import { ReactNode } from "react";
import { Box } from "@mui/material";
import Appbar from "../appbar/Appbar";
import Footer from "../footer/Footer";

interface PageContainerProps {
  children: ReactNode;
}

const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Appbar />
      <Box sx={{ flexGrow: 1 }}>{children}</Box>
      <Footer />
    </Box>
  );
};

export default PageContainer;
