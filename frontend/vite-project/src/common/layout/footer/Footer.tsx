import { Box, Typography, Link, Stack } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        borderTop: "1px solid gray",
        bgcolor: "#f8f8f8",
        height: "100%",
        py: 4,
        mt: 4,
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0px 20px",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "center", sm: "flex-start" },
          gap: { xs: "30px", sm: 0 },
        }}
      >
        {/* Company Info */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            flex: 1, // Company Info가 전체 영역의 2/3을 차지하도록 설정
          }}
        >
          <Typography variant="h6" gutterBottom>
            Company Name
          </Typography>
          <Typography variant="body2" color="textSecondary">
            1234 Main Street, City, Country
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Phone: (123) 456-7890
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Email: contact@company.com
          </Typography>
        </Box>

        {/* Social Media Links */}
        <Box
          sx={{
            flex: 1, // Social Media Links가 전체 영역의 1/3을 차지하도록 설정
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Follow Us
          </Typography>
          <Stack direction="row" spacing={2}>
            <Link
              sx={{ color: "#05ce02" }}
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook />
            </Link>
            <Link
              sx={{ color: "#05ce02" }}
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter />
            </Link>
            <Link
              sx={{ color: "#05ce02" }}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </Link>
            <Link
              sx={{ color: "#05ce02" }}
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn />
            </Link>
          </Stack>
        </Box>
      </Box>

      {/* Copyright Section */}
      <Box
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
          mt: 6, // 저작권 부분과 푸터 상단 간격을 넓게 설정
        }}
      >
        <Typography variant="body2" color="textSecondary">
          &copy; {new Date().getFullYear()} Company Name. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
