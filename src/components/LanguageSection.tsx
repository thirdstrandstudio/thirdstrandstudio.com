import { FunctionComponent, useEffect } from "react";
import styles from "./LanguageSection.module.css";

export type LanguageSectionType = {
  className?: string;
};

const LanguageSection: FunctionComponent<LanguageSectionType> = ({
  className = "",
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
    <div className={[styles.section, className].join(" ")}>
      <b className={styles.servicesTitle}>Specialities</b>
      <div className={styles.frameParent} data-animate-on-scroll>
        <div className={styles.techTileParent}>
          <button className={styles.techTile}>
            <div className={styles.ts}>
              <img
                className={styles.typescriptIcon}
                alt=""
                src="/typescript.svg"
              />
            </div>
            <div className={styles.technologies1TitleParent}>
              <div className={styles.technologies1Title}>Type Script</div>
              <div className={styles.technologies1Title1}>Learn more</div>
            </div>
          </button>
          <button className={styles.techTile}>
            <div className={styles.c}>
              <img className={styles.csharpIcon} alt="" src="/csharp.svg" />
            </div>
            <div className={styles.technologies1TitleParent}>
              <div className={styles.technologies1Title}>C#</div>
              <div className={styles.technologies1Title1}>Learn more</div>
            </div>
          </button>
          <button className={styles.techTile}>
            <div className={styles.re}>
              <img className={styles.reactIcon} alt="" src="/react.svg" />
            </div>
            <div className={styles.technologies1TitleParent}>
              <div className={styles.technologies1Title}>React</div>
              <div className={styles.technologies1Title1}>Learn more</div>
            </div>
          </button>
        </div>
        <div className={styles.techTileParent}>
          <button className={styles.techTile}>
            <div className={styles.ja}>
              <img
                className={styles.javascriptIcon}
                alt=""
                src="/javascript.svg"
              />
            </div>
            <div className={styles.technologies1TitleParent}>
              <div className={styles.technologies1Title}>Java Script</div>
              <div className={styles.technologies1Title1}>Learn more</div>
            </div>
          </button>
          <button className={styles.techTile}>
            <div className={styles.c}>
              <img className={styles.nodejsIcon} alt="" src="/nodejs.svg" />
            </div>
            <div className={styles.technologies1TitleParent}>
              <div className={styles.technologies1Title}>Node.js</div>
              <div className={styles.technologies1Title1}>Learn more</div>
            </div>
          </button>
          <button className={styles.techTile}>
            <div className={styles.ja}>
              <img className={styles.javaIcon} alt="" src="/java.svg" />
            </div>
            <div className={styles.technologies1TitleParent}>
              <div className={styles.technologies1Title}>Python</div>
              <div className={styles.technologies1Title1}>Learn more</div>
            </div>
          </button>
        </div>
        <div className={styles.techTileParent}>
          <button className={styles.techTile}>
            <div className={styles.aws}>
              <img className={styles.awsIcon} alt="" src="/aws.svg" />
            </div>
            <div className={styles.technologies1TitleParent}>
              <div className={styles.technologies1Title}>Amazon AWS</div>
              <div className={styles.technologies1Title1}>Learn more</div>
            </div>
          </button>
          <button className={styles.techTile}>
            <div className={styles.ja}>
              <img className={styles.sqlIcon} alt="" src="/sql.svg" />
            </div>
            <div className={styles.technologies1TitleParent}>
              <div className={styles.technologies1Title}>SQL</div>
              <div className={styles.technologies1Title1}>Learn more</div>
            </div>
          </button>
          <button className={styles.techTile}>
            <div className={styles.uni}>
              <img className={styles.unityIcon} alt="" src="/unity.svg" />
            </div>
            <div className={styles.technologies1TitleParent}>
              <div className={styles.technologies1Title}>Unity</div>
              <div className={styles.technologies1Title1}>Learn more</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageSection;
