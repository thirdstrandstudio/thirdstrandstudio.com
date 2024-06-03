import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
  example1Title?: string;
  example2Title?: string;
  example1Title1?: string;
  example2Title1?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  example1Title,
  example2Title,
  example1Title1,
  example2Title1,
}) => {
  return (
    <div className={[styles.specialityExample1Parent, className].join(" ")}>
      <div className={styles.specialityExample1}>
        <div className={styles.checkbox}>
          <div className={styles.checkboxChild} />
          <img className={styles.checkboxItem} alt="" src="/vector-13.svg" />
        </div>
        <div className={styles.example1Title}>{example1Title}</div>
      </div>
      <div className={styles.specialityExample1}>
        <div className={styles.checkbox}>
          <div className={styles.checkboxChild} />
          <img className={styles.checkboxItem} alt="" src="/vector-13.svg" />
        </div>
        <div className={styles.example1Title}>{example2Title}</div>
      </div>
      <div className={styles.specialityExample1}>
        <div className={styles.checkbox}>
          <div className={styles.checkboxChild} />
          <img className={styles.checkboxItem} alt="" src="/vector-13.svg" />
        </div>
        <div className={styles.example1Title}>{example1Title1}</div>
      </div>
      <div className={styles.specialityExample1}>
        <div className={styles.checkbox}>
          <div className={styles.checkboxChild} />
          <img className={styles.checkboxItem} alt="" src="/vector-13.svg" />
        </div>
        <div className={styles.example1Title}>{example2Title1}</div>
      </div>
    </div>
  );
};

export default FrameComponent;
