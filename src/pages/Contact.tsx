import { FunctionComponent } from "react";
import HeaderContainer1 from "../components/HeaderContainer1";
import LetsWorkTogetherContainer from "../components/LetsWorkTogetherContainer";
import Footer from "../components/Footer";
import styles from "./Contact.module.css";

const Contact: FunctionComponent = () => {
  return (
    <div className={styles.contact}>
      <HeaderContainer1 />
      <LetsWorkTogetherContainer />
    </div>
  );
};

export default Contact;
