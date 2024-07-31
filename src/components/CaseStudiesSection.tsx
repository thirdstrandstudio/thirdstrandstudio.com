import { FunctionComponent, useCallback, useEffect } from "react";
import CaseStudyTile from "./CaseStudyTile";
import styles from "./CaseStudiesSection.module.css";

export type CaseStudiesSectionType = {
  className?: string;
};

const CaseStudiesSection: FunctionComponent<CaseStudiesSectionType> = ({
  className = "",
}) => {
  const onShowcase04ContainerClick = useCallback(() => {
    // Please sync "showcase_03" to the project
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

  const onShowcase01ContainerClick = useCallback(() => {
    // Please sync "showcase_02" to the project
  }, []);

  return (
    <div className={[styles.section, className].join(" ")}>
      <b className={styles.servicesTitle}>Case Studies</b>
      <button
        className={styles.showcase04Container}
        onClick={onShowcase04ContainerClick}
        data-animate-on-scroll
      >
        <div className={styles.showcase04}>
          <div className={styles.info}>
            <div className={styles.tags}>
              <div className={styles.heroStraplineWrapper}>
                <div className={styles.heroStrapline}>Product design</div>
              </div>
              <div className={styles.heroStraplineWrapper}>
                <div className={styles.heroStrapline}>Web3</div>
              </div>
              <div className={styles.heroStraplineWrapper}>
                <div className={styles.heroStrapline}>NFT Technology</div>
              </div>
            </div>
            <b className={styles.title}>Kitsumon Web3 MOBA Gaming</b>
            <div className={styles.description}>
              Kitsumon is an online MOBA game and a virtual world. Read our case
              study to learn more about the Kitsumon website development.
            </div>
            <div className={styles.learnMore}>
              <div className={styles.learnMore1}>{`Learn more >`}</div>
            </div>
          </div>
          <img className={styles.imageIcon} alt="" src="/image@2x.png" />
        </div>
      </button>
      <div className={styles.showcase01ContainerParent}>
        <CaseStudyTile
          title="All Links Platform"
          description="Discover how Third Strand Studio developed All Links, an intuitive app like Linktree, streamlining social media presence for users."
          image="/image1@2x.png"
        />
        <CaseStudyTile
          title="MySitesLive Builder"
          description="Learn how Third Strand Studio built MySitesLive, a website builder tailored for mortgage advisors in the USA, boosting their online presence."
          image="/image2@2x.png"
        />
      </div>
      <div className={styles.showcase01ContainerParent}>
        <CaseStudyTile
          title="Kitsumon"
          description="In Kitsumon, players embark on a quest to collect and trade their very own Kitsumon, each possessing distinctive traits, elements, abilities, and rarity levels. "
          image="/image3@2x.png"
        />
        <CaseStudyTile
          title="Mortgage Builder"
          description="We crafted a dynamic one-page website, tailor-made for accredited mortgage advisors, enabling them to showcase their expertise with finesse. "
          image="/image4@2x.png"
        />
      </div>
      <button
        className={styles.showcase01Container}
        onClick={onShowcase01ContainerClick}
        data-animate-on-scroll
      >
        <div className={styles.showcase04}>
          <div className={styles.info}>
            <div className={styles.tags}>
              <div className={styles.heroStraplineWrapper}>
                <div className={styles.heroStrapline}>Product design</div>
              </div>
              <div className={styles.heroStraplineWrapper}>
                <div className={styles.heroStrapline}>Web3</div>
              </div>
              <div className={styles.heroStraplineWrapper}>
                <div className={styles.heroStrapline}>NFT Technology</div>
              </div>
            </div>
            <b
              className={styles.title}
            >{`Web3 Gaming NFT Guild, Marketplace & UI`}</b>
            <div className={styles.description1}>
              Kitsumon is an online MOBA game and a virtual world. Read our case
              study to learn more about the Kitsumon website development.
            </div>
            <div className={styles.learnMore}>
              <div className={styles.learnMore1}>{`Learn more >`}</div>
            </div>
          </div>
          <img className={styles.imageIcon} alt="" src="/image5@2x.png" />
        </div>
      </button>
    </div>
  );
};

export default CaseStudiesSection;
