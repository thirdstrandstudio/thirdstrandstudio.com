import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ServiceTile.module.css";

export type ServiceTileType = {
  className?: string;
  title?: string;
  description?: string;

  /** Style props */
  dividerColor?: CSSProperties["backgroundColor"];
};

const ServiceTile: FunctionComponent<ServiceTileType> = ({
  className = "",
  title,
  description,
  dividerColor,
}) => {
  const dividerStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: dividerColor,
    };
  }, [dividerColor]);

  return (
    <div className={[styles.softwareDevelopmentContainer, className].join(" ")}>
      <div className={styles.softwareDevelopment}>
        <div className={styles.divider} style={dividerStyle} />
        <div className={styles.titleDescription}>
          <div className={styles.title}>{title}</div>
          <div className={styles.description}>{description}</div>
        </div>
        <div className={styles.learnMore}>
          <div className={styles.learnMore1}>{`Learn more >`}</div>
        </div>
      </div>
    </div>
  );
};

export default ServiceTile;
