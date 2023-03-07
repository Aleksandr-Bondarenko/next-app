const Heading = ({ tag, content }) => {
  const Tag = tag || "h1";
  return <Tag className="heading">{content}</Tag>;
};

export default Heading;
