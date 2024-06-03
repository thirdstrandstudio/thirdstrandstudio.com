import { FunctionComponent, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DesktopHeader from "./DesktopHeader1";
import styles from "./HeaderContainer.module.css";

export type HeaderContainerType = {
  className?: string;
};

const HeaderContainer: FunctionComponent<HeaderContainerType> = ({
  className = "",
}) => {
  const navigate = useNavigate();


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

  const onContactUsButtonClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
    <div className={[styles.headerContainer, className].join(" ")}>
      
      <DesktopHeader />
      <div className={styles.heroStrapline} data-animate-on-scroll>
        <div className={styles.gradientDivider} />
        <div className={styles.heroStrapline1}>
          Tailored software for the extraordinary
        </div>
        <div
          className={styles.heroDescription}
        >{`Providing companies access to their technology goals, supporting brands & creators to step into Web3.`}</div>
        <button
          className={styles.contactUsButton}
          onClick={onContactUsButtonClick}
        >
          <div className={styles.text}>Contact us</div>
        </button>
      </div>
    </div>
  );
};

export default HeaderContainer;
