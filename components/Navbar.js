import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";

const navigation = [
  { id: 1, title: "HOME", path: "/" },
  { id: 2, title: "POSTS", path: "/posts" },
  { id: 3, title: "CONTACTS", path: "/contacts" },
];

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={40} height={40} />
        </Link>
      </div>

      <ul className={styles.navList}>
        {navigation.map(({ id, title, path }) => {
          const activeClass = router.pathname === path ? styles.active : null;
          return (
            <li key={id}>
              <Link href={path} className={`${styles.navLink} ${activeClass}`}>
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
