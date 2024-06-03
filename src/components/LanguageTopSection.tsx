import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DesktopHeader from "./DesktopHeader1";
import styles from "./LanguageTopSection.module.css";

export type LanguageTopSectionType = {
  className?: string;
};

const LanguageTopSection: FunctionComponent<LanguageTopSectionType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.languageTopSection, className].join(" ")}>
      <DesktopHeader></DesktopHeader>
      <div className={styles.languageTitle}>
        <div className={styles.gradientDivider} />
        <div className={styles.heroStrapline}>
          <p className={styles.weAre}>{`We are `}</p>
          <p className={styles.weAre}>Third Strand Studio</p>
        </div>
        <div className={styles.heroStrapline1}>
          At Third Strand Studio, we specialize in conceptualizing, designing,
          and developing cutting-edge applications and websites for the digital
          realm. With a passion for Web3, Metaverse, crypto payment systems, and
          video games, we thrive on crafting innovative solutions in these
          dynamic spaces.
        </div>
      </div>
    </div>
  );
};

export default LanguageTopSection;
