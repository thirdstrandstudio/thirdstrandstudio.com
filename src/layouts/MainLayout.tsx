import React, { ReactNode, useEffect } from "react";
import Header from "../components/Header";
import styles from "./MainLayout.module.css";
import ButtonComponent, {
  ButtonComponentProps,
} from "../components/ButtonComponent";

export interface StrapLineData {
  title: string;
  description: string;
  descriptionClassName?: string;
  headerImage?: string;
  button?: ButtonComponentProps;
}

interface MainLayoutProps {
  children: ReactNode;
  strapLineData?: StrapLineData;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, strapLineData }) => {
  const backgroundImageStyling = strapLineData?.headerImage
    ? { backgroundImage: `url(${strapLineData.headerImage})` }
    : {};
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
    <div className={styles.mainContainer}>
      <div style={backgroundImageStyling} className={styles.headerContainer}>
        <Header />
        {strapLineData && (
          <div className={styles.heroStrapline} data-animate-on-scroll>
            <div className={styles.gradientDivider} />
            <div className={styles.heroStrapline1}>{strapLineData.title}</div>
            <div className={[styles.heroDescription, strapLineData?.descriptionClassName ?? ""].join(" ")}>
              {strapLineData.description}
            </div>
            {strapLineData.button && (
              <ButtonComponent {...strapLineData.button} />
            )}
          </div>
        )}
      </div>
      {children}
    </div>
  );
};

export default MainLayout;
