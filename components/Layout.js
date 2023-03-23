import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const [isScrollBarShow, setIsScrollBarShow] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const screenHeight = document.documentElement.clientHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    if (screenHeight !== scrollHeight && router.pathname === "/posts") {
      setIsScrollBarShow(true);
    } else {
      setIsScrollBarShow(false);
    }
  }, [router]);

  return (
    <>
      <Header />
      <main className="container">{children}</main>
      <Footer isScrollBarShow={isScrollBarShow} />
    </>
  );
};

export default Layout;
