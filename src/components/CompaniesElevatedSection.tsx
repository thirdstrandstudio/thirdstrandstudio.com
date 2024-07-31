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
        <ClientLogo logo="/bplogo.svg" />
        <ClientLogo logo="/bodyshoplogo.svg" />
        <ClientLogo logo="/bplogo.svg" />
        <ClientLogo logo="/theeconomistlogo.svg" />
        <ClientLogo logo="/bplogo.svg" />
        <ClientLogo logo="/greaterlondonlogo.svg" />
        <ClientLogo logo="/bplogo.svg" />
        <ClientLogo logo="/bplogo.svg" />
        <ClientLogo logo="/bplogo.svg" />
        <ClientLogo logo="/relendexlogo.svg" />
        <ClientLogo logo="/bplogo.svg" />
        <ClientLogo logo="/bplogo.svg" />
        <ClientLogo logo="/bplogo.svg" />
        <ClientLogo logo="/bplogo.svg" />
        <ClientLogo logo="/bplogo.svg" />
        <ClientLogo logo="/mencaplogo.svg" />
        <ClientLogo logo="/bplogo.svg" />
        <ClientLogo logo="/kodaklogo@2x.png" />
        <ClientLogo logo="/bplogo.svg" />
        <div className={styles.clientLogo}>
          <div className={styles.highwireLogo}>
            <div className={styles.highwirePressIdyhialdfm21}>
              <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
              <img className={styles.vectorIcon1} alt="" src="/vector2.svg" />
              <img className={styles.groupIcon} alt="" src="/group.svg" />
              <div className={styles.group}>
                <img className={styles.groupIcon1} alt="" src="/group1.svg" />
                <div className={styles.poweredBy}>{`Powered by `}</div>
                <img className={styles.groupIcon2} alt="" src="/group2.svg" />
                <img className={styles.groupIcon3} alt="" src="/group3.svg" />
              </div>
            </div>
          </div>
        </div>
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
