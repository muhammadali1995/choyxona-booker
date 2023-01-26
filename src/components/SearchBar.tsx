import { Box, Button, TextField } from "@mui/material";

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
      <Button onClick={() => {
          handleSearch()
      }} variant="contained">
        Search
      </Button>
    </Box>
  );
}
