import { useState, useEffect } from "react";
import styles from "../styles/UpButton.module.scss";

const UpButton = () => {
  const [isBtnShow, setIsBtnShow] = useState(false);

  const onScrollHandler = (evt) => {
    if (
      document.documentElement.scrollTop > 250 ||
      document.body.scrollTop > 250
    ) {
      setIsBtnShow(true);
    } else {
      setIsBtnShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", onScrollHandler);

    return () => document.removeEventListener("scroll", onScrollHandler);
  }, []);

  const toTopHandler = () => {
    window.scrollBy({
      top: -document.documentElement.scrollTop,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`${styles.button} ${!isBtnShow && styles.hideBtn}`}
      onClick={toTopHandler}
    >
      <i className={`fa-solid fa-circle-arrow-up fa-2xl ${styles.icon}`}></i>
    </div>
  );
};

export default UpButton;
