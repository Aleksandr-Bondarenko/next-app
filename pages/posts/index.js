// import { useState, useEffect } from "react";
import Head from "next/head";
import Heading from "../../components/Heading";
import PostsList from "../../components/PostsList";
import UpButton from "../../components/UpButton";

const AllPostsPage = (props) => {
  // const [posts, setPosts] = useState([]);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => setPosts(data))
  //     .catch((err) => setError(err.message));
  // }, []);

  const { posts } = props;

  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <Heading content="All Posts:" />
      <UpButton />
      <PostsList posts={posts} />
    </>
  );
};

export default AllPostsPage;

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  let formattedData;

  if (!data) {
    return {
      notFound: true,
    };
  } else {
    formattedData = data.map((item) => ({ id: item.id, title: item.title }));
  }

  return {
    props: {
      posts: formattedData,
    },
  };
};
