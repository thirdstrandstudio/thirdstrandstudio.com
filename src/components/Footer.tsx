import { FunctionComponent } from "react";
import styles from "./Footer.module.css";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <div className={[styles.footer, className].join(" ")}>
      <div className={styles.footerContainer}>
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
        <div className={styles.links}>
          <div className={styles.column01}>
            <div className={styles.companyColumnHeader}>COMPANY</div>
            <div className={styles.services}>Services</div>
            <div className={styles.services}>Work</div>
            <div className={styles.services}>About</div>
            <div className={styles.connectButton}>
              <div className={styles.connect}>Connect</div>
            </div>
          </div>
          <div className={styles.column01}>
            <div className={styles.companyColumnHeader}>OTHER</div>
            <div className={styles.services}>Link1</div>
            <div className={styles.services}>Link2</div>
            <div className={styles.services}>Link3</div>
            <div className={styles.services}>Link3</div>
          </div>
        </div>
      </div>
      <div className={styles.bottomFooterContainer}>
        <div className={styles.bottomFooter}>
          <div className={styles.divider} />
          <div className={styles.bottomFooterInfo}>
            <div className={styles.thirdStrandStudio}>
              <a
                className={styles.thirdStrandStudioLtd147}
                href="https://find-and-update.company-information.service.gov.uk/company/14776266"
                target="_blank"
              >
                <span className={styles.thirdStrandStudio1}>
                  Third Strand Studio LTD - (14776266
                </span>
              </a>
              ) - © 2024 All Rights Reserved
            </div>
            <div className={styles.privacyLegal}>
              <div className={styles.services}>Privacy Policy</div>
              <div className={styles.services}>Legal</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
