import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import CardDescription from "../components/CardDescription";

interface ServiceCardProps {
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => (
  <Card
    sx={{
      height: "200px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "8px",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    }}
  >
    <CardContent sx={{ textAlign: "center" }}>
      <Typography variant="h6" gutterBottom sx={{ fontWeight: "500" }}>
        {title}
      </Typography>
      <CardDescription>{description}</CardDescription>
    </CardContent>
  </Card>
);

export default ServiceCard;
