import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import styles from "../styles/PageLoader.module.scss";

const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => {
      setIsLoading(true);
    };

    const handleComplete = () => {
      setIsLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <>
      {isLoading && (
        <div className={styles.wrapper}>
          <div className={styles.loader}>Loading...</div>
        </div>
      )}
    </>
  );
};

export default PageLoader;
