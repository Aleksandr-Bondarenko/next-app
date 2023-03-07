import { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Heading from "../components/Heading";

const ErrorPage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);

  return (
    <>
      <Head>
        <title>Error</title>
      </Head>
      <Heading content="NOT FOUND 404" />
      <p>Something went wrong...</p>
    </>
  );
};

export default ErrorPage;
