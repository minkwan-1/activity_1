import { Box, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Appbar = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: "100%",
        height: "80px",
        position: "sticky",
        bgcolor: "white",
        top: 0,
        zIndex: 999,
        fontWeight: "bold",
        borderBottom: "1px solid gray",
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          height: "100%",
          display: "flex",
          margin: "0 auto",
          padding: "0px 20px",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "1.5rem",
            color: "#05ce02",
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        >
          Check_tivity
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <IconButton
              aria-label="search"
              sx={{ fontWeight: "bold" }}
            ></IconButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              fontSize: "1rem",
            }}
          >
            <Box
              onClick={() => navigate("/auth")}
              sx={{
                marginLeft: 1,
                fontWeight: "bold",
                cursor: "pointer",
                color: "gray",
                border: "1px solid gray",
                padding: "15px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "12px",
              }}
            >
              로그인
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Appbar;
