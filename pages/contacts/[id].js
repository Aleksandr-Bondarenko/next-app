import Head from "next/head";
import ContactDetail from "../../components/ContactDetail";
import Heading from "../../components/Heading";

const ContactPage = ({ contact }) => {
  if (!contact) {
    return (
      <>
        <Head>
          <title>Empty Contact</title>
        </Head>
        <Heading tag="h2" content="This contact is empty..." />
      </>
    );
  }
  return (
    <>
      <Head>
        <title>{`Contact-${contact?.id}`}</title>
      </Head>
      <ContactDetail contact={contact} />
    </>
  );
};

export default ContactPage;

export const getServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      contact: data,
    },
  };
};
