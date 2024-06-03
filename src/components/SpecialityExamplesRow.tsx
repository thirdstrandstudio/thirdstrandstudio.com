import { FunctionComponent } from "react";
import styles from "./SpecialityExamplesRow.module.css";

export type SpecialityExamplesRowType = {
  className?: string;
};

const SpecialityExamplesRow: FunctionComponent<SpecialityExamplesRowType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.specialityExamplesRow1, className].join(" ")}>
      <b className={styles.cfTitle}>Our developers Node.js expertise.</b>
      <div
        className={styles.description}
      >{`We specialise in many forms of Node.js production. `}</div>
      <div className={styles.specialityExamplesRow1Inner}>
        <div className={styles.specialityExample1Parent}>
          <div className={styles.specialityExample1}>
            <div className={styles.checkbox}>
              <div className={styles.checkboxChild} />
              <img
                className={styles.checkboxItem}
                alt=""
                src="/vector-13.svg"
              />
            </div>
            <div className={styles.example1Title}>
              Complex single-page apps (SPAs)
            </div>
          </div>
          <div className={styles.specialityExample1}>
            <div className={styles.checkbox}>
              <div className={styles.checkboxChild} />
              <img
                className={styles.checkboxItem}
                alt=""
                src="/vector-13.svg"
              />
            </div>
            <div className={styles.example1Title}>Browser games</div>
          </div>
          <div className={styles.specialityExample1}>
            <div className={styles.checkbox}>
              <div className={styles.checkboxChild} />
              <img
                className={styles.checkboxItem}
                alt=""
                src="/vector-13.svg"
              />
            </div>
            <div className={styles.example1Title}>Command-line tools</div>
          </div>
          <div className={styles.specialityExample1}>
            <div className={styles.checkbox}>
              <div className={styles.checkboxChild} />
              <img
                className={styles.checkboxItem}
                alt=""
                src="/vector-13.svg"
              />
            </div>
            <div className={styles.example1Title}>Server-side web apps</div>
          </div>
          <div className={styles.specialityExample1}>
            <div className={styles.checkbox}>
              <div className={styles.checkboxChild} />
              <img
                className={styles.checkboxItem}
                alt=""
                src="/vector-13.svg"
              />
            </div>
            <div className={styles.example1Title}>Many other disciplines</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialityExamplesRow;
