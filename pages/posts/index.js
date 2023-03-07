// import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Heading from "../../components/Heading";
import styles from "../../styles/AllPosts.module.css";

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
      <div
        style={{
          width: "40px",
          height: "40px",
        }}
      >
        <i className="fa-solid fa-circle-arrow-up fa-2xl"></i>
      </div>
      <ul className={styles.list}>
        {posts?.map(({ id, title }) => {
          const formattedTitle = title.replace(
            title.charAt(0),
            title.charAt(0).toUpperCase()
          );

          return (
            <li key={id} className={styles.item}>
              <Link href={`posts/${id}`}>{formattedTitle}</Link>
            </li>
          );
        })}
      </ul>
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
