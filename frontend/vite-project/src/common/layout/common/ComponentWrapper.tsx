import { Box } from "@mui/material";
import React, { ReactNode } from "react";

interface ComponentWrapperProps {
  children: ReactNode;
}

const ComponentWrapper: React.FC<ComponentWrapperProps> = ({ children }) => {
  return (
    <Box
      sx={{
        maxWidth: "1200px",
        minHeight: "100vh",
        border: "1px solid green",
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
        padding: "0px 20px",
      }}
    >
      {children}
    </Box>
  );
};

export default ComponentWrapper;
