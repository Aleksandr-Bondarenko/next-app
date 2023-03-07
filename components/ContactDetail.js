import Heading from "./Heading";

const ContactDetail = ({ contact }) => {
  const { name, username, email, website, address } = contact || {};
  const { street, suite, city } = address || {};

  if (!contact) {
    return <Heading tag="h2" content="Post is empty" />;
  }

  return (
    <article>
      <Heading tag="h3" content={name} />
      <div>
        <p>{email}</p>
        <p>{username}</p>
        <p>{website}</p>
      </div>

      <address>
        <p>{city}</p>
      </address>
    </article>
  );
};

export default ContactDetail;
