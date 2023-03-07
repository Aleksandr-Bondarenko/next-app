import Link from "next/link";
import Head from "next/head";
import Heading from "../../components/Heading";

const ContactsPage = ({ contacts }) => {
  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <Heading content="All Contacts:" />
      <ul>
        {contacts?.map(({ id, name }) => (
          <li key={id}>
            <Link href={`contacts/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactsPage;

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      contacts: data,
    },
  };
};
