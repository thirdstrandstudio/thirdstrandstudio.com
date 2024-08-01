import { CSSProperties, FunctionComponent } from "react";
import styles from "./ArticleFullRow.module.css";

export type ArticleFullRowType = {
  className?: string;
  desc?: string;
  title?: string;
  image?: string;
  reverse?: boolean;
};

const ArticleFullRow: FunctionComponent<ArticleFullRowType> = ({
  className = "",
  desc,
  title,
  image,
  reverse = false
}) => {
  const reverseStyle: CSSProperties = reverse ? {"flexDirection": "row-reverse"} : {};
  return (
    <div style={reverseStyle} className={[styles.articleLeft, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.heading3}>
          <b className={styles.about}>{title}</b>
        </div>
        <div className={styles.paragraph}>
          <div className={styles.thirdStrandStudio}>{desc}</div>
        </div>
      </div>
      <div className={styles.container1}>
        <img className={styles.aboutTheProjectpngIcon} alt="" src={image} />
      </div>
    </div>
  );
};

export default ArticleFullRow;
