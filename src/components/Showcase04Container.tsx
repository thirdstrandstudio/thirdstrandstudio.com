import {
  FunctionComponent,
  useMemo,
  type CSSProperties,
  useEffect,
} from "react";
import styles from "./Showcase04Container.module.css";

export type Showcase04ContainerType = {
  className?: string;
  title?: string;
  image?: string;
  tags?: string[];
  /** Style props */
  propMargin?: CSSProperties["margin"];

  /** Action props */
  onShowcase04ContainerClick?: () => void;
  onLearnMoreTextClick?: () => void;
};

const Showcase04Container: FunctionComponent<Showcase04ContainerType> = ({
  className = "",
  title,
  image,
  propMargin,
  onShowcase04ContainerClick,
  onLearnMoreTextClick,
  tags
}) => {
  const descriptionStyle: CSSProperties = useMemo(() => {
    return {
      margin: propMargin,
    };
  }, [propMargin]);

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
      className={[styles.showcase04Container, className].join(" ")}
      onClick={onShowcase04ContainerClick}
      data-animate-on-scroll
    >
      <div className={styles.showcase04}>
        <div className={styles.info}>
          <div className={styles.tags}>
            {
              tags?.map((tag, i) => (
                <div key={`tag${i}`} className={styles.tag01}>
                  <div className={styles.heroStrapline}>{tag}</div>
                </div>
              ))
            }
          </div>
          <b className={styles.title}>{title}</b>
          <div className={styles.description} style={descriptionStyle}>
            Kitsumon is an online MOBA game and a virtual world. Read our case
            study to learn more about the Kitsumon website development.
          </div>
          <div className={styles.learnMore}>
            <div
              className={styles.learnMore1}
              onClick={onLearnMoreTextClick}
            >{`Learn more >`}</div>
          </div>
        </div>
        <img className={styles.imageIcon} alt="" src={image} />
      </div>
    </button>
  );
};

export default Showcase04Container;
