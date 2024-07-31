import { FunctionComponent } from "react";
import Header from "../components/Header";
import BookAMeeting from "../components/BookAMeeting";
import Footer from "../components/Footer";
import styles from "./Contact.module.css";

const Contact: FunctionComponent = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.headerContainer}>
        <Header />
      </div>
      <div className={styles.letsWorkTogetherContainer}>
        <div className={styles.letsWorkTogether}>
          <div className={styles.titleDescription}>
            <div className={styles.heroStrapline}>Let’s work together</div>
            <div className={styles.divider} />
            <div className={styles.description}>
              Have a project for us? Feel free to reach out!
            </div>
          </div>
        </div>
        <BookAMeeting />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
