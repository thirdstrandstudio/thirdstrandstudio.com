import { FunctionComponent, useCallback, useEffect } from "react";
import ClientLogo from "./ClientLogo";
import styles from "./CompaniesElevatedSection.module.css";

export type CompaniesElevatedSectionType = {
  className?: string;
};

const CompaniesElevatedSection: FunctionComponent<
  CompaniesElevatedSectionType
> = ({ className = "" }) => {
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
      <b className={styles.servicesTitle}>Companies We’ve Elevated</b>
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
      <div className={styles.grid}>
        <ClientLogo logo="/bbc-logo.svg" />
        <ClientLogo logo="/body-shop-logo.svg" />
        <ClientLogo logo="/bp-logo.svg" />
        <ClientLogo logo="/lexis-nexis-logo.svg" />
        <ClientLogo logo="/mencap-logo.svg" />
        <ClientLogo logo="/relendex-logo.svg" />
        <ClientLogo logo="/sage-logo.svg" />
        <ClientLogo logo="/santander-logo.svg" />
        <ClientLogo logo="/selfridges-logo.svg" />
        <ClientLogo logo="/sony-logo.svg" />
        <ClientLogo logo="/the-economist-logo.svg" />
        <ClientLogo logo="/wimbledon-logo.svg" />
        <ClientLogo logo="/xdefi-logo.svg" />
        <ClientLogo logo="/cgi-logo.svg" />
        <ClientLogo logo="/fidelity-logo.svg" />
        <ClientLogo logo="/greater-london-logo.svg" />
        <ClientLogo logo="/highwire-logo.svg" />
        <ClientLogo logo="/imperial-war-logo.svg" />
        <ClientLogo logo="/kitsumon-logo.svg" />
        <ClientLogo logo="/kodak-logo.svg" />
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
          <img className={styles.imageIcon} alt="" src="/image6@2x.png" />
        </div>
      </button>
    </div>
  );
};

export default CompaniesElevatedSection;
