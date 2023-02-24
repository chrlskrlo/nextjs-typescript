import Link from "next/link";
import styles from "../../styles/Partial.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar_main}>
      <Link href="/">
        <img src="#" alt="logo" />
      </Link>
      <div className={styles.navbar_menu_main}>
        <Link className="navbar-menu-item" href="/about">
          About
        </Link>
        <Link className="navbar-menu-item" href="/todos">
          Todo List
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
