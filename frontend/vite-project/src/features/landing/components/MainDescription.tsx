import { Typography } from "@mui/material";
import { ReactNode } from "react";

interface MainDescriptionProps {
  children: ReactNode;
}

const MainDescription: React.FC<MainDescriptionProps> = ({ children }) => {
  return (
    <Typography
      variant="body1"
      paragraph
      sx={{ color: "#666666", maxWidth: "800px", margin: "0 auto" }}
    >
      {children}
    </Typography>
  );
};

export default MainDescription;
