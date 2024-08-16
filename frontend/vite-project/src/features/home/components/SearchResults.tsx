import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  IconButton,
  CardActions,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface SearchResult {
  place_name: string;
  road_address_name?: string;
  address_name: string;
  phone?: string;
}

interface SearchResultsProps {
  searchResults: SearchResult[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ searchResults }) => (
  <Grid container spacing={2} sx={{ marginTop: "20px" }}>
    {searchResults.map((result, index) => (
      <Grid item xs={12} sm={6} md={4} key={index}>
        <Card
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            position: "relative",
            "&:hover": {
              border: "1px solid #05ce02",
              boxShadow: "none",
            },
            border: "1px solid #ddd",
          }}
        >
          <CardActions
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              padding: "8px",
            }}
          >
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </CardActions>
          <CardContent sx={{ paddingTop: "40px" }}>
            {" "}
            {/* Adding padding to ensure content is not covered */}
            <Typography variant="h6" gutterBottom>
              {result.place_name}
            </Typography>
            {result.road_address_name && (
              <Typography variant="body2" color="textSecondary">
                {result.road_address_name}
              </Typography>
            )}
            <Typography variant="body2" color="textSecondary">
              {result.address_name}
            </Typography>
            {result.phone && (
              <Typography variant="body2" color="textSecondary">
                {result.phone}
              </Typography>
            )}
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
);

export default SearchResults;
