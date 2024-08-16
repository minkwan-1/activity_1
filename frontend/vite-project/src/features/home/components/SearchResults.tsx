import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";

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
            "&:hover": {
              border: "1px solid #05ce02",
              boxShadow: "none",
            },
            border: "1px solid #ddd",
          }}
        >
          <CardContent>
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
