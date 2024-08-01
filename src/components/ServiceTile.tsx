import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ServiceTile.module.css";
import { useNavigate } from "react-router-dom";

export type ServiceTileType = {
  className?: string;
  title?: string;
  description?: string;
  href?: string;
  /** Style props */
  dividerColor?: CSSProperties["backgroundColor"];
};

const ServiceTile: FunctionComponent<ServiceTileType> = ({
  className = "",
  title,
  description,
  dividerColor,
  href,
}) => {
  const navigate = useNavigate();
  const dividerStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: dividerColor,
    };
  }, [dividerColor]);

  const onLearnMoreClick = () => {
    if (href) {
      navigate(href);
    }
  };

  return (
    <div className={[styles.softwareDevelopmentContainer, className].join(" ")}>
      <div className={styles.softwareDevelopment}>
        <div className={styles.divider} style={dividerStyle} />
        <div className={styles.titleDescription}>
          <div className={styles.title}>{title}</div>
          <div className={styles.description}>{description}</div>
        </div>
        <div className={styles.learnMore}>
          <div
            onClick={onLearnMoreClick}
            className={styles.learnMore1}
          >{`Learn more >`}</div>
        </div>
      </div>
    </div>
  );
};

export default ServiceTile;
