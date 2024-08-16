import React from "react";
import { Box } from "@mui/material";
import SectionTitle from "../components/SectionTitle";
import MainDescription from "../components/MainDescription";
import LandingPageButton from "../components/LandingPageButton";

interface HeroSectionProps {
  title: string;
  description: string;
  buttonText: string;
  onClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  buttonText,
  onClick,
}) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#ffffff",
      padding: "80px 20px",
      borderRadius: "12px",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
      marginTop: "20px",
    }}
  >
    <SectionTitle>{title}</SectionTitle>
    <MainDescription>{description}</MainDescription>
    <LandingPageButton onClick={onClick}>{buttonText}</LandingPageButton>
  </Box>
);

export default HeroSection;
