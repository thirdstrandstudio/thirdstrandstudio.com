import { FunctionComponent } from "react";
import styles from "./BottomSection.module.css";
import BookAMeetingContainer1 from "./BookAMeetingContainer1";

export type BottomSectionType = {
  className?: string;
};

const BottomSection: FunctionComponent<BottomSectionType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.bottomSection, className].join(" ")}>
      <b className={styles.heroStrapline}>
        With our innovative approach, we've not only created a website but a
        powerful tool for mortgage advisors to establish their online presence
        effectively. Join hands with us, and let's transform your advisory
        business into an engaging digital journey.
      </b>
      <BookAMeetingContainer1 />
    </div>
  );
};

export default BottomSection;
