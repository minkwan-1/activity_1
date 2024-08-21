import PageContainer from "../common/layout/common/PageContainer";
import ComponentWrapper from "../common/layout/common/ComponentWrapper";
import { Box, Typography } from "@mui/material";

const LandingPage = () => {
  return (
    <PageContainer>
      <ComponentWrapper>
        {/* section 1 */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            mb: 4,
          }}
        >
          <Typography variant="h4" gutterBottom>
            Section1 Title
          </Typography>
          <Box
            sx={{
              border: "1px solid black",
              width: "1000px",
              height: "300px",
            }}
          ></Box>
        </Box>

        {/* section 2 */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            mb: 4,
          }}
        >
          <Typography variant="h4" gutterBottom>
            Section2 Title
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              width: "1000px",
            }}
          >
            <Box
              sx={{
                border: "1px solid black",
                width: "calc(50% - 16px)",
                height: "300px",
              }}
            ></Box>
            <Box
              sx={{
                border: "1px solid black",
                width: "calc(50% - 16px)",
                height: "300px",
              }}
            ></Box>
            <Box
              sx={{
                border: "1px solid black",
                width: "calc(50% - 16px)",
                height: "300px",
              }}
            ></Box>
            <Box
              sx={{
                border: "1px solid black",
                width: "calc(50% - 16px)",
                height: "300px",
              }}
            ></Box>
          </Box>
        </Box>
        {/* section 3 */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            mb: 4,
          }}
        >
          <Typography variant="h4" gutterBottom>
            Section3 Title
          </Typography>
          <Box
            sx={{
              border: "1px solid black",
              width: "1000px",
              height: "300px",
            }}
          ></Box>
        </Box>
      </ComponentWrapper>
    </PageContainer>
  );
};

export default LandingPage;
