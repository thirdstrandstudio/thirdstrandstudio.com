import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Tag.module.css";

export type TagType = {
  className?: string;
  text?: string;

  /** Style props */
  textColor?: CSSProperties["color"];
};

const Tag: FunctionComponent<TagType> = ({
  className = "",
  text,
  textColor
}) => {
  const heroStraplineStyle: CSSProperties = useMemo(() => {
    return {
      color: textColor,
    };
  }, [textColor]);

  return (
    <div className={[styles.tag, className].join(" ")}>
      <div className={styles.heroStrapline} style={heroStraplineStyle}>
        {text}
      </div>
    </div>
  );
};

export default Tag;
