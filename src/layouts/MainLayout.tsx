import React, { ReactNode, useEffect } from "react";
import Header from "../components/Header";
import styles from "./MainLayout.module.css";
import ButtonComponent, {
  ButtonComponentProps,
} from "../components/ButtonComponent";
import Footer from "../components/Footer";
import { Head } from "vite-react-ssg";

export interface StrapLineData {
  title: string;
  description?: string;
  descriptionClassName?: string;
  button?: ButtonComponentProps;
}

interface MainLayoutProps {
  children: ReactNode;
  headerChildren?: ReactNode;
  headerImage?: string;
  strapLineData?: StrapLineData;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  strapLineData,
  headerChildren,
  headerImage,
}) => {
  const backgroundImageStyling = headerImage
    ? { backgroundImage: `url(${headerImage})` }
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
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000" />
        <meta property="og:image" content="/thumbnail.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Tailored software for the extraordinary. Providing companies access to their technology goals, supporting brands & creators to step into Web3."
        />
        <title>Third Strand Studio</title>
      </Head>
      <div style={backgroundImageStyling} className={styles.headerContainer}>
        <Header />
        {headerChildren}
        {strapLineData && (
          <div className={styles.heroStrapline} data-animate-on-scroll>
            <div className={styles.gradientDivider} />
            <div className={styles.heroStrapline1}>{strapLineData.title}</div>
            <div
              className={[
                styles.heroDescription,
                strapLineData?.descriptionClassName ?? "",
              ].join(" ")}
            >
              {strapLineData.description}
            </div>
            {strapLineData.button && (
              <ButtonComponent {...strapLineData.button} />
            )}
          </div>
        )}
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
