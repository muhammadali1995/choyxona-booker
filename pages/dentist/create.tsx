import { Box, Button, Typography } from "@mui/material";
import Head from "next/head";
import Layout from "../../src/components/Layout";
import { Dentist } from "../../src/models/Dentist";
import axios from "axios";

export default function CreateDentist() {
  const handleSubmit = async (values: Dentist) => {
    const res = await axios.post("/api/dentists", {
      name: "Ali Tosh",
      about: "New Dentist",
      img: "https://www.cochrane.org/sites/default/files/public/styles/social_media/public/uploads/news/young-confident-asian-male-dentist-medical-treatment-to-a-female-patient-at-the-clinic.-dental-clinic-concept-911844046_1257x838_3.jpeg?itok=Gf5izRh3",
    });
    console.log("res ", res);
  };

  return (
    <Layout>
      <Head>Add New Dentist</Head>
      <Box>
        <Typography variant="h6" component="h6">
          Enter details of a new dentist
        </Typography>
        <Button variant="contained" onClick={handleSubmit}>
          Add
        </Button>
      </Box>
    </Layout>
  );
}
