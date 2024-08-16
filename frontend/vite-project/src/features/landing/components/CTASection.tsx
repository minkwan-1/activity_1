import React from "react";
import { Box } from "@mui/material";
import SectionTitle from "../components/SectionTitle";
import MainDescription from "../components/MainDescription";
import LandingPageButton from "../components/LandingPageButton";

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  onClick: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({
  title,
  description,
  buttonText,
  onClick,
}) => (
  <Box
    sx={{
      backgroundColor: "#ffffff",
      color: "#333333",
      padding: "60px 20px",
      textAlign: "center",
      borderRadius: "12px",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      marginTop: "40px",
    }}
  >
    <SectionTitle>{title}</SectionTitle>
    <MainDescription>{description}</MainDescription>
    <LandingPageButton onClick={onClick}>{buttonText}</LandingPageButton>
  </Box>
);

export default CTASection;
