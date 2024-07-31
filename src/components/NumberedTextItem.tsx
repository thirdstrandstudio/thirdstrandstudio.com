import { FunctionComponent } from "react";
import styles from "./NumberedTextItem.module.css";

export type NumberedTextItemType = {
  className?: string;
  numberText?: string;
  text?: string;
};

const NumberedTextItem: FunctionComponent<NumberedTextItemType> = ({
  className = "",
  numberText,
  text,
}) => {
  return (
    <div className={[styles.titleDescription, className].join(" ")}>
      <div className={styles.titleWrapper}>
        <b className={styles.title}>{numberText}</b>
      </div>
      <div className={styles.description}>{text}</div>
    </div>
  );
};

export default NumberedTextItem;
