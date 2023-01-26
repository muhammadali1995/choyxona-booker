import { Box, Button, Input, OutlinedInput, TextField } from "@mui/material";
import { useState } from "react";

export default function SearchBar({
  handleSearch,
  setSearchText,
  searchText
}: {
  handleSearch: Function;
  setSearchText: Function;
  searchText: string;
}) {
  return (
    <Box sx={{ display: "flex", gap: "10px" }}>
      <TextField
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
        sx={{ flexGrow: 1 }}
        placeholder="Search Dentists"
      />
      <Button onClick={handleSearch} variant="contained">
        Search
      </Button>
    </Box>
  );
}
