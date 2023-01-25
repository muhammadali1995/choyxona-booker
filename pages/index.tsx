import Head from "next/head";
import clientPromise from "../lib/mongodb";

export default function Home() {
  return (
    <div>
      <div className="container">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
      <div>Hello World</div>
    </div>
  );
}
