import { FunctionComponent } from "react";
import styles from "./Blurb.module.css";

export type BlurbType = {
  className?: string;
  title?: string;
  desc?: string;
};

const Blurb: FunctionComponent<BlurbType> = ({
  className = "",
  title,
  desc,
}) => {
  return (
    <div className={[styles.blurb, className].join(" ")}>
      <div className={styles.margin}>
        <div className={styles.container}>
          <div className={styles.container1}>
            <div className={styles.weDeliverExcellence}>{title}</div>
          </div>
        </div>
      </div>
      <div className={styles.container2}>
        <b className={styles.exploreHowWe}>{desc}</b>
      </div>
    </div>
  );
};

export default Blurb;
