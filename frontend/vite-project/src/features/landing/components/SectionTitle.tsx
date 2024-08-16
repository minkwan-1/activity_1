import { Typography } from "@mui/material";
import { ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return (
    <Typography
      variant="h4"
      gutterBottom
      sx={{ textAlign: "center", fontWeight: "600", mb: 4 }}
    >
      {children}
    </Typography>
  );
};

export default SectionTitle;
