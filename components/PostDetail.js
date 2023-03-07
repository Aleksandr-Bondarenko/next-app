import Heading from "./Heading";

const PostDetail = ({ post }) => {
  const { title, body } = post || {};
  // const router = useRouter();

  if (!post) {
    return <Heading tag="h2" content="Post is empty" />;
  }

  return (
    <article>
      <Heading tag="h3" content={title} />

      <p>{body}</p>
    </article>
  );
};

export default PostDetail;
