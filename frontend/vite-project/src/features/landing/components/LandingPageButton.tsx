import React from "react";
import { Button, SxProps } from "@mui/material";

interface CustomButtonProps {
  variant?: "contained" | "outlined" | "text";
  onClick?: () => void;
  children: React.ReactNode;
  sx?: SxProps;
  size?: "small" | "medium" | "large";
}

const LandingPageButton: React.FC<CustomButtonProps> = ({
  variant = "contained",
  onClick,
  children,
  sx,
  size = "large",
}) => {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      sx={{
        backgroundColor: "#05ce02",
        color: "white",
        "&:hover": {
          backgroundColor: "#03b001",
        },
        mt: 2,
        ...sx,
      }}
      size={size}
    >
      {children}
    </Button>
  );
};

export default LandingPageButton;
