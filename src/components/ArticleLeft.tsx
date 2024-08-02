import { FunctionComponent } from "react";
import styles from "./ArticleLeft.module.css";

export type ArticleLeftType = {
  className?: string;
  title?: string;
  desc?: string;
  image?: string;
};

const ArticleLeft: FunctionComponent<ArticleLeftType> = ({
  className = "",
  title,
  desc,
  image,
}) => {
  return (
    <div className={[styles.articleLeft, className].join(" ")}>
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

export default ArticleLeft;
