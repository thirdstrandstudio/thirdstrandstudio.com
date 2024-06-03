import { FunctionComponent, useEffect } from "react";
import Projectmanager from "./Projectmanager";
import styles from "./TimelineTile.module.css";

export type TimelineTileType = {
  className?: string;
  timeline1Icon?: string;
  title?: string;
  establishProjectGoals?: string;
  estimatingTickets?: string;
  confirmRequirements?: string;
  developTimeline?: string;
};

const TimelineTile: FunctionComponent<TimelineTileType> = ({
  className = "",
  timeline1Icon,
  title,
  establishProjectGoals,
  estimatingTickets,
  confirmRequirements,
  developTimeline,
}) => {
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
      className={[styles.timelineTile, className].join(" ")}
      data-animate-on-scroll
    >
      <Projectmanager
        propPosition="unset"
        propTop="unset"
        propLeft="unset"
        propWidth="4.688rem"
        propHeight="4.688rem"
        propWidth1="3.75rem"
        propHeight1="3.75rem"
      />
      <b className={styles.title}>{title}</b>
      <div className={styles.description}>
        <ul className={styles.establishProjectGoalsEstima}>
          <li className={styles.establishProjectGoals}>
            {establishProjectGoals}
          </li>
          <li className={styles.establishProjectGoals}>{estimatingTickets}</li>
          <li className={styles.establishProjectGoals}>
            {confirmRequirements}
          </li>
          <li>{developTimeline}</li>
        </ul>
      </div>
    </div>
  );
};

export default TimelineTile;
