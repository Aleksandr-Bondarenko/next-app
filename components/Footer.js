import styles from "../styles/Footer.module.scss";

const Footer = ({ isScrollBarShow }) => {
  const classes = `${styles.footer} ${isScrollBarShow && styles.withScroll}`;
  return (
    <footer className={classes}>
      <p className={styles.text}>CREATED BY A.BONDARENKO</p>
    </footer>
  );
};

export default Footer;
