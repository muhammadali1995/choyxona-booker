import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Head from "next/head";
import { useState } from "react";
import { fetchAll } from "../src/api/api";
import DentistCard from "../src/components/Dentist";
import Layout from "../src/components/Layout";
import StyledLink from "../src/components/Link";
import SearchBar from "../src/components/SearchBar";
import { Dentist } from "../src/models/Dentist";

export default function Home({ allDentits }: { allDentits: Dentist[] }) {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {};

  return (
    <Layout home>
      <Head>
        <title>Book a dentist</title>
      </Head>
      <Box mb={8} sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5" component="h5">
          Book your dentist
        </Typography>
        <Button variant="contained">
          <StyledLink href="/dentist/create">Add a New Dentist</StyledLink>
        </Button>
      </Box>
      <SearchBar
        searchText={searchText}
        handleSearch={handleSearch}
        setSearchText={setSearchText}
      />
      <Box
        sx={{
          display: "flex",
          gap: "30px",
          flexWrap: "wrap",
          justifyContent: "space-between",
          marginTop: "30px",
        }}
      >
        {allDentits.map((dentist: Dentist) => (
          <DentistCard key={dentist._id} dentist={dentist} />
        ))}
      </Box>
    </Layout>
  );
}

export async function getStaticProps() {
  const dentists = await fetchAll();
  return {
    props: {
      allDentits: dentists,
    },
  };
}
