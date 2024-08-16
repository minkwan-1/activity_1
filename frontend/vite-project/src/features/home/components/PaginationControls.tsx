import React from "react";
import { Button } from "@mui/material";

interface PaginationControlsProps {
  pagination: any;
}

const PaginationControls: React.FC<PaginationControlsProps> = ({
  pagination,
}) => (
  <div style={{ marginTop: "20px", textAlign: "center" }}>
    <div>
      {Array.from({ length: pagination.last }, (_, index) => (
        <Button
          key={index}
          onClick={() => pagination.gotoPage(index + 1)}
          variant={pagination.current === index + 1 ? "contained" : "outlined"}
          sx={{
            margin: "0 5px",
            bgcolor: "#05ce02",
            color: "white",
          }}
        >
          {index + 1}
        </Button>
      ))}
    </div>
  </div>
);

export default PaginationControls;
