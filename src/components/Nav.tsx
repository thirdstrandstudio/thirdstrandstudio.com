import { FunctionComponent, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Nav.module.css";

export type NavType = {
  className?: string;
  onClose?: () => void;
};

const Nav: FunctionComponent<NavType> = ({ className = "", onClose }) => {
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

  const onAboutText1Click = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onContactUsTextClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
    <div className={[styles.nav, className].join(" ")} data-animate-on-scroll>
      <a href="/">
        <div className={styles.frameParent}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.frameItem} />
            <div className={styles.frameInner} />
            <div className={styles.rectangleDiv} />
            <div className={styles.frameChild1} />
            <div className={styles.frameChild2} />
            <div className={styles.frameChild3} />
            <div className={styles.frameChild4} />
            <div className={styles.frameChild5} />
            <div className={styles.frameChild6} />
            <div className={styles.frameChild7} />
          </div>
          <img
            className={styles.thirdStrandStudios}
            alt=""
            src="/third-strand-studios1.svg"
          />
        </div>
      </a>
      <div className={styles.contactUs} onClick={onHomeClick}>
        Home
      </div>
      <div className={styles.contactUs} onClick={onAboutText1Click}>
        About Us
      </div>
      <div className={styles.contactUs} onClick={onContactUsTextClick}>
        Contact Us
      </div>
    </div>
  );
};

export default Nav;
