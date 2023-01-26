import { Box, Container } from "@mui/system";
import Head from 'next/head'
import Link from "next/link";
export const siteTitle = "Book a dentist";

export default function Layout({ children, home }: any) {
  return (
    <Container maxWidth="md" sx={{marginTop: '50px'}}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Book a local dentists"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main>{children}</main>
      {!home && (
        <Box>
          <Link href="/">← Back to home</Link>
        </Box>
      )}
    </Container>
  );
}
