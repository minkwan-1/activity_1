import React from "react";
import { TextField, InputAdornment, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface SearchFieldProps {
  keyword: string;
  onKeywordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
}

const SearchField: React.FC<SearchFieldProps> = ({
  keyword,
  onKeywordChange,
  onSearch,
}) => (
  <TextField
    placeholder="점포명으로 찾기 (예: 엑스케이프 강남점)"
    value={keyword}
    onChange={onKeywordChange}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      ),
      endAdornment: (
        <InputAdornment position="end">
          <Button
            onClick={onSearch}
            sx={{
              bgcolor: "#05ce02",
              color: "white",
              borderRadius: "7px",
            }}
          >
            검색
          </Button>
        </InputAdornment>
      ),
    }}
    fullWidth
    sx={{
      marginBottom: "20px",
      bgcolor: "#f5f5f5",
      borderRadius: "10px",
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          border: "none",
        },
        "&:hover fieldset": {
          borderColor: "#ced4da",
        },
        "&.Mui-focused fieldset": {
          borderColor: "#ced4da",
        },
      },
      "& .MuiInputBase-input": {
        padding: "15px",
      },
    }}
  />
);

export default SearchField;
