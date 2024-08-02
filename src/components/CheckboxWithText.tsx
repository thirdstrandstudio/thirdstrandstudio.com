import { FunctionComponent } from "react";
import styles from "./CheckboxWithText.module.css";

export type CheckboxWithTextType = {
  className?: string;
  text?: string;
};

const CheckboxWithText: FunctionComponent<CheckboxWithTextType> = ({
  className = "",
  text,
}) => {
  return (
    <div className={[styles.specialityExample1, className].join(" ")}>
      <div className={styles.checkbox}>
        <div className={styles.checkboxChild} />
        <img className={styles.checkboxItem} alt="" src="/vector-1.svg" />
      </div>
      <div className={styles.example1Title}>{text}</div>
    </div>
  );
};

export default CheckboxWithText;
