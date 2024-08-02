import { FunctionComponent, useCallback, useEffect } from "react";
import ShowcaseTagsContainer from "./ShowcaseTagsContainer";
import styles from "./CaseStudyTile.module.css";

export type CaseStudyTileType = {
  className?: string;
  title?: string;
  description?: string;
  image?: string;
  href?: string;
};

const CaseStudyTile: FunctionComponent<CaseStudyTileType> = ({
  className = "",
  title,
  description,
  image,
  href
}) => {
  const onShowcase01ContainerClick = useCallback(() => {
    if(href)
      window.location.href = href;
  }, []);

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
    <button
      className={[styles.showcase01Container, className].join(" ")}
      onClick={onShowcase01ContainerClick}
      data-animate-on-scroll
    >
      <div className={styles.showcase01}>
        <div className={styles.info}>
          <ShowcaseTagsContainer />
          <b className={styles.title}>{title}</b>
          <div className={styles.description}>{description}</div>
          <div className={styles.learnMore}>
            <div className={styles.learnMore1}>{`Learn more >`}</div>
          </div>
        </div>
        <img className={styles.imageIcon} alt="" src={image} />
      </div>
    </button>
  );
};

export default CaseStudyTile;
