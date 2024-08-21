import { Box, Button } from "@mui/material";
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
          justifyContent: "space-between",
          margin: "0 auto",
          height: "100%",
          padding: "0px 12px",
          display: "flex",
        }}
      >
        <Box
          onClick={() => navigate("/")}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          로고
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button onClick={() => navigate("/escape")}>방탈출</Button>
          <Button onClick={() => navigate("/boardgame")}>보드게임</Button>
          <Button onClick={() => navigate("/community")}>커뮤니티</Button>
          <Button onClick={() => navigate("/partnership")}>제휴</Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            onClick={() => navigate("/auth")}
            sx={{ border: "1px solid gray" }}
          >
            로그인
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Appbar;
