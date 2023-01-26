import { Box, Typography } from "@mui/material";
import { GetStaticPaths, GetStaticProps } from "next";
import { fetchOne, fetchAllDentistIds } from "../../src/api/api";
import { Dentist } from "../../src/models/Dentist";
import Image from "next/image";
import Layout from "../../src/components/Layout";

export default function BookDentist({ dentist }: { dentist: Dentist }) {
  console.log(dentist);
  return (
    <Layout>
      <Box sx={{ display: "flex", gap: "20px" }}>
        <Box sx={{ width: "200px", height: "200px", position: "relative" }}>
          <Image
            src={dentist.img}
            alt={dentist.name}
            layout="fill"
            objectFit="contain"
          />
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <Typography variant="h5">{dentist.name}</Typography>
          <Typography variant="subtitle2" component="p">
            {dentist.about}
          </Typography>
        </Box>
      </Box>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await fetchAllDentistIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const dentist = await fetchOne(params?.id as string);
  return {
    props: {
      dentist,
    },
  };
};
