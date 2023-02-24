import Header from "./Partial/Header";
import Navbar from "./Partial/Navbar";
import Footer from "./Partial/Footer";
import React from "react";

import styles from '../styles/Partial.module.css'

type Props = {
  children: any;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <div className={styles.layout_main}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </React.Fragment>
  );
};
export default Layout;
