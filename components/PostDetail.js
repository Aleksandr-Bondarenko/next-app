import Heading from "./Heading";
import { toUppercaseFirstLetterInTextBlock } from "../js/utility";
import styles from "../styles/PostDetail.module.scss";

const PostDetail = ({ post }) => {
  const { title, body } = post || {};

  if (!post) {
    return <Heading tag="h2" content="Post is empty" />;
  }

  return (
    <article className={styles.section}>
      <Heading
        tag="h3"
        content={toUppercaseFirstLetterInTextBlock(title)}
        className={styles.heading}
      />

      <p className={styles.content}>
        {toUppercaseFirstLetterInTextBlock(body)}
      </p>
    </article>
  );
};

export default PostDetail;
