import styles from "../styles/SocialsList.module.css";

const SocialsList = ({ socials }) => {
  return (
    <ul className={styles.list}>
      {socials?.map(({ id, icon, path }) => (
        <li key={id} className={styles.item}>
          <a
            href={`${icon === "google" ? "mailto:" : ""}${path}`}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <i className={`fa-brands fa-${icon} fa-xl ${styles.icon}`} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialsList;
