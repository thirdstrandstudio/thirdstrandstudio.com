import {
  FunctionComponent,
  useMemo,
  type CSSProperties,
  useEffect,
} from "react";
import Projectmanager from "./Projectmanager";
import styles from "./TopTile.module.css";

export type TopTileType = {
  className?: string;
  timeline1Icon?: string;
  timeline1Title?: string;
  establishProjectGoals?: string;
  estimatingTickets?: string;
  confirmRequirements?: string;

  /** Style props */
  topTileMinWidth?: CSSProperties["minWidth"];
  topTileMinHeight?: CSSProperties["minHeight"];
  projectmanagerWidth?: CSSProperties["width"];
  projectmanagerHeight?: CSSProperties["height"];
  timeline1IconWidth?: CSSProperties["width"];
  timeline1IconHeight?: CSSProperties["height"];
  timeline1TitleHeight?: CSSProperties["height"];
  establishProjectGoalsMarginBottom?: CSSProperties["marginBottom"];
  estimatingTicketsMarginBottom?: CSSProperties["marginBottom"];
  confirmRequirementsMarginBottom?: CSSProperties["marginBottom"];
};

const TopTile: FunctionComponent<TopTileType> = ({
  className = "",
  timeline1Icon,
  timeline1Title,
  establishProjectGoals,
  estimatingTickets,
  confirmRequirements,
  topTileMinWidth,
  topTileMinHeight,
  projectmanagerWidth,
  projectmanagerHeight,
  timeline1IconWidth,
  timeline1IconHeight,
  timeline1TitleHeight,
  establishProjectGoalsMarginBottom,
  estimatingTicketsMarginBottom,
  confirmRequirementsMarginBottom,
}) => {
  const topTileStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: topTileMinWidth,
      minHeight: topTileMinHeight,
    };
  }, [topTileMinWidth, topTileMinHeight]);

  const projectmanagerStyle: CSSProperties = useMemo(() => {
    return {
      width: projectmanagerWidth,
      height: projectmanagerHeight,
    };
  }, [projectmanagerWidth, projectmanagerHeight]);

  const timeline1IconStyle: CSSProperties = useMemo(() => {
    return {
      width: timeline1IconWidth,
      height: timeline1IconHeight,
    };
  }, [timeline1IconWidth, timeline1IconHeight]);

  const timeline1TitleStyle: CSSProperties = useMemo(() => {
    return {
      height: timeline1TitleHeight,
    };
  }, [timeline1TitleHeight]);

  const establishProjectGoalsStyle: CSSProperties = useMemo(() => {
    return {
      marginBottom: establishProjectGoalsMarginBottom,
    };
  }, [establishProjectGoalsMarginBottom]);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div
      className={[styles.topTile, className].join(" ")}
      data-animate-on-scroll
      style={topTileStyle}
    >
      <Projectmanager
        propPosition="unset"
        propTop="unset"
        propLeft="unset"
        propWidth="75px"
        propHeight="75px"
        propWidth1="60px"
        propHeight1="60px"
      />
      <b className={styles.timeline1Title} style={timeline1TitleStyle}>
        {timeline1Title}
      </b>
      <div className={styles.timeline1BodyContainer}>
        <ul className={styles.establishProjectGoalsEstima}>
          <li
            className={styles.establishProjectGoals}
            style={establishProjectGoalsStyle}
          >
            {establishProjectGoals}
          </li>
          <li className={styles.establishProjectGoals}>Estimating tickets</li>
          <li className={styles.establishProjectGoals}>Confirm requirements</li>
          <li>Develop timeline</li>
        </ul>
      </div>
    </div>
  );
};

export default TopTile;
