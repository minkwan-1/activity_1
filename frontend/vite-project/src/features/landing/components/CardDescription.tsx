import { Typography } from "@mui/material";
import { ReactNode } from "react";

interface CardDescriptionProps {
  children: ReactNode;
}

const CardDescription: React.FC<CardDescriptionProps> = ({ children }) => {
  return (
    <Typography variant="body2" color="textSecondary">
      {children}
    </Typography>
  );
};

export default CardDescription;
