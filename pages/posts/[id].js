import Head from "next/head";
import PostDetail from "../../components/PostDetail";

const PostPage = ({ post }) => {
  return (
    <>
      <Head>
        <title>{`Post-${post.id}`}</title>
      </Head>

      <PostDetail post={post} />
    </>
  );
};

export default PostPage;

export const getStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  const paths = data.map(({ id }) => ({
    params: {
      id: id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: data,
    },
  };
};
