import Link from "next/link";
import styles from "../styles/PostsList.module.scss";

const PostsList = ({ posts }) => {
  return (
    <ol className={styles.list}>
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
    </ol>
  );
};

export default PostsList;
