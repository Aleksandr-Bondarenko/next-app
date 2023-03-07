import Head from "next/head";
import Heading from "../components/Heading";
import SocialsList from "../components/SocialsList";

const HomePage = ({ socials }) => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main className="home-page">
        <Heading content="Next.js application" />
        <SocialsList className="" socials={socials} />
      </main>
    </>
  );
};

export default HomePage;

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.API_HOST}/api/socials`);
  const data = await res.json();

  return {
    props: {
      socials: data,
    },
  };
};
