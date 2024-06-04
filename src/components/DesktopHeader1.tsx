import { FunctionComponent, useState, useCallback } from "react";
import Nav from "./Nav";
import PortalDrawer from "./PortalDrawer";
import styles from "./DesktopHeader1.module.css";
import { useNavigate } from "react-router-dom";

export type DesktopHeaderType = {
  className?: string;
};

const DesktopHeader: FunctionComponent<DesktopHeaderType> = ({
  className = "",
}) => {
  const [isNavOpen, setNavOpen] = useState(false);
  const navigate = useNavigate();
  const openNav = useCallback(() => {
    setNavOpen(true);
  }, []);

  const closeNav = useCallback(() => {
    setNavOpen(false);
  }, []);

  const onAboutText1Click = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onContactUsTextClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  const onHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <>
      <div className={[styles.desktopHeader, className].join(" ")}>
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
              src="/third-strand-studios.svg"
            />
          </div>
        </a>
        <div className={styles.nav}>
          <div className={styles.contactUs} onClick={onHomeClick}>
            Home
          </div>
          <div className={styles.contactUs} onClick={onAboutText1Click}>
            About Us
          </div>
          <div className={styles.contactUs} onClick={onContactUsTextClick}>
            Contact Us
          </div>
          <button className={styles.burgerIcon} onClick={openNav}>
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          </button>
        </div>
      </div>
      {isNavOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Top"
          onOutsideClick={closeNav}
        >
          <Nav onClose={closeNav} />
        </PortalDrawer>
      )}
    </>
  );
};

export default DesktopHeader;
