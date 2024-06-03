import {
  FunctionComponent,
  useMemo,
  type CSSProperties,
  useEffect,
} from "react";
import DesktopHeader from "./DesktopHeader1";
import styles from "./TopSection.module.css";

export type TopSectionType = {
  className?: string;
  heroStrapline?: string;

  /** Style props */
  desktopHeaderBackgroundImage?: CSSProperties["backgroundImage"];
};

const TopSection: FunctionComponent<TopSectionType> = ({
  className = "",
  heroStrapline,
  desktopHeaderBackgroundImage,
}) => {
  const topSectionStyle: CSSProperties = useMemo(() => {
    return {
      backgroundImage: desktopHeaderBackgroundImage,
    };
  }, [desktopHeaderBackgroundImage]);

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
      className={[styles.topSection, className].join(" ")}
      style={topSectionStyle}
    >
      <DesktopHeader
      />
      <div className={styles.heroStraplineContainer}>
        <div className={styles.heroStrapline} data-animate-on-scroll>
          <div className={styles.gradientDivider} />
          <div className={styles.heroStrapline1}>{heroStrapline}</div>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
