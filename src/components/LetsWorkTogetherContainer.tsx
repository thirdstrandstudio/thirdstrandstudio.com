import { FunctionComponent } from "react";
import styles from "./LetsWorkTogetherContainer.module.css";
import BookAMeetingContainer1 from "./BookAMeetingContainer1";

export type LetsWorkTogetherContainerType = {
  className?: string;
};

const LetsWorkTogetherContainer: FunctionComponent<
  LetsWorkTogetherContainerType
> = ({ className = "" }) => {
  return (
    <div className={[styles.letsWorkTogetherContainer, className].join(" ")}>
      <div className={styles.letsWorkTogether}>
        <div className={styles.titleDescription}>
          <div className={styles.heroStrapline}>Let’s work together</div>
          <div className={styles.divider} />
          <div className={styles.description}>
            Have a project for us? Feel free to reach out!
          </div>
        </div>
      </div>
      <BookAMeetingContainer1 showMeetingText={true} />
    </div>
  );
};

export default LetsWorkTogetherContainer;
