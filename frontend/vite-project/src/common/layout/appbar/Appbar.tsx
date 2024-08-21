import { Box } from "@mui/material";

const Appbar = () => {
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
      앱바
    </Box>
  );
};

export default Appbar;
