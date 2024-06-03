import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./SoftwareDevelopmentContainer.module.css";

export type SoftwareDevelopmentContainerType = {
  className?: string;
  title?: string;
  showDivider?: boolean;
  showLearnMore?: boolean;
  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  description?: string;
};

const SoftwareDevelopmentContainer: FunctionComponent<
  SoftwareDevelopmentContainerType
> = ({ className = "", title, propBackgroundColor, showDivider, showLearnMore, description }) => {
  const dividerStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div className={[styles.softwareDevelopmentContainer, className].join(" ")}>
      <div className={styles.softwareDevelopment}>
        {showDivider && <div className={styles.divider} style={dividerStyle} />}
        <div className={styles.titleDescription}>
          <div className={styles.title}>{title}</div>
          <div
            className={styles.description}
          >{ description || `We specialise in developing fine tuned efficient software for multiple We specialise in developing fine tuned efficient software for multiple We specialise in developing fine tuned efficient software for multiple `}</div>
        </div>
        {showLearnMore && (
          <div className={styles.learnMore}>
            <div className={styles.learnMore1}>{`Learn more >`}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SoftwareDevelopmentContainer;
