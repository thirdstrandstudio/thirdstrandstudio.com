import { FunctionComponent, useMemo, type CSSProperties } from "react";
import SoftwareDevelopmentContainer from "./SoftwareDevelopmentContainer";
import styles from "./ServicesContainer.module.css";

export type ServicesContainerType = {
  className?: string;
  servicesTitle?: string;
  description?: string;
  description1?: string;
  title?: string;
  description2?: string;
  showServicesTitle?: boolean;
  showDivider?: boolean;
  showLearnMore?: boolean;
  dividerVisible?: boolean;
  learnMoreVisible?: boolean;
  dividerVisible1?: boolean;
  learnMoreVisible1?: boolean;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth?: CSSProperties["width"];
  servicesWidth?: CSSProperties["width"];
  softwareDevelopmentFontSize?: CSSProperties["fontSize"];
  softwareDevelopmentLineHeight?: CSSProperties["lineHeight"];
  softwareDevelopmentFontWeight?: CSSProperties["fontWeight"];
  dividerLineHeight?: CSSProperties["lineHeight"];
  dividerColor?: CSSProperties["color"];
  titleDescriptionAlignSelf?: CSSProperties["alignSelf"];
  titleDescriptionWidth?: CSSProperties["width"];
  servicesWidth1?: CSSProperties["width"];
  softwareDevelopmentFontSize1?: CSSProperties["fontSize"];
  softwareDevelopmentLineHeight1?: CSSProperties["lineHeight"];
  softwareDevelopmentFontWeight1?: CSSProperties["fontWeight"];
  dividerLineHeight1?: CSSProperties["lineHeight"];
  dividerColor1?: CSSProperties["color"];
  titleDescriptionAlignSelf1?: CSSProperties["alignSelf"];
  titleDescriptionWidth1?: CSSProperties["width"];
  servicesWidth2?: CSSProperties["width"];
  softwareDevelopmentFontSize2?: CSSProperties["fontSize"];
  softwareDevelopmentLineHeight2?: CSSProperties["lineHeight"];
  softwareDevelopmentFontWeight2?: CSSProperties["fontWeight"];
  dividerLineHeight2?: CSSProperties["lineHeight"];
  dividerColor2?: CSSProperties["color"];
  titleDescriptionAlignSelf2?: CSSProperties["alignSelf"];
  titleDescriptionWidth2?: CSSProperties["width"];
};

const ServicesContainer: FunctionComponent<ServicesContainerType> = ({
  className = "",
  servicesTitle,
  description,
  description1,
  title,
  description2,
  showServicesTitle,
  showDivider,
  showLearnMore,
  dividerVisible,
  learnMoreVisible,
  dividerVisible1,
  learnMoreVisible1,
  propPadding,
  propAlignSelf,
  propWidth,
  servicesWidth,
  softwareDevelopmentFontSize,
  softwareDevelopmentLineHeight,
  softwareDevelopmentFontWeight,
  dividerLineHeight,
  dividerColor,
  titleDescriptionAlignSelf,
  titleDescriptionWidth,
  servicesWidth1,
  softwareDevelopmentFontSize1,
  softwareDevelopmentLineHeight1,
  softwareDevelopmentFontWeight1,
  dividerLineHeight1,
  dividerColor1,
  titleDescriptionAlignSelf1,
  titleDescriptionWidth1,
  servicesWidth2,
  softwareDevelopmentFontSize2,
  softwareDevelopmentLineHeight2,
  softwareDevelopmentFontWeight2,
  dividerLineHeight2,
  dividerColor2,
  titleDescriptionAlignSelf2,
  titleDescriptionWidth2,
}) => {
  const servicesContainerStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const servicesTitleStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  const dividerStyle: CSSProperties = useMemo(() => {
    return {
      width: servicesWidth,
    };
  }, [servicesWidth]);

  const titleStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: softwareDevelopmentFontSize,
      lineHeight: softwareDevelopmentLineHeight,
      fontWeight: softwareDevelopmentFontWeight,
    };
  }, [
    softwareDevelopmentFontSize,
    softwareDevelopmentLineHeight,
    softwareDevelopmentFontWeight,
  ]);

  const description1Style: CSSProperties = useMemo(() => {
    return {
      lineHeight: dividerLineHeight,
      color: dividerColor,
    };
  }, [dividerLineHeight, dividerColor]);

  const learnMoreStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: titleDescriptionAlignSelf,
      width: titleDescriptionWidth,
    };
  }, [titleDescriptionAlignSelf, titleDescriptionWidth]);

  const dividerStyle1: CSSProperties = useMemo(() => {
    return {
      width: servicesWidth1,
    };
  }, [servicesWidth1]);

  const titleStyle1: CSSProperties = useMemo(() => {
    return {
      fontSize: softwareDevelopmentFontSize1,
      lineHeight: softwareDevelopmentLineHeight1,
      fontWeight: softwareDevelopmentFontWeight1,
    };
  }, [
    softwareDevelopmentFontSize1,
    softwareDevelopmentLineHeight1,
    softwareDevelopmentFontWeight1,
  ]);

  const description1Style1: CSSProperties = useMemo(() => {
    return {
      lineHeight: dividerLineHeight1,
      color: dividerColor1,
    };
  }, [dividerLineHeight1, dividerColor1]);

  const learnMoreStyle1: CSSProperties = useMemo(() => {
    return {
      alignSelf: titleDescriptionAlignSelf1,
      width: titleDescriptionWidth1,
    };
  }, [titleDescriptionAlignSelf1, titleDescriptionWidth1]);

  const dividerStyle2: CSSProperties = useMemo(() => {
    return {
      width: servicesWidth2,
    };
  }, [servicesWidth2]);

  const titleStyle2: CSSProperties = useMemo(() => {
    return {
      fontSize: softwareDevelopmentFontSize2,
      lineHeight: softwareDevelopmentLineHeight2,
      fontWeight: softwareDevelopmentFontWeight2,
    };
  }, [
    softwareDevelopmentFontSize2,
    softwareDevelopmentLineHeight2,
    softwareDevelopmentFontWeight2,
  ]);

  const description1Style2: CSSProperties = useMemo(() => {
    return {
      lineHeight: dividerLineHeight2,
      color: dividerColor2,
    };
  }, [dividerLineHeight2, dividerColor2]);

  const learnMoreStyle2: CSSProperties = useMemo(() => {
    return {
      alignSelf: titleDescriptionAlignSelf2,
      width: titleDescriptionWidth2,
    };
  }, [titleDescriptionAlignSelf2, titleDescriptionWidth2]);

  return (
    <div
      className={[styles.servicesContainer, className].join(" ")}
      style={servicesContainerStyle}
    >
      {showServicesTitle && (
        <b className={styles.servicesTitle} style={servicesTitleStyle}>
          {servicesTitle}
        </b>
      )}
      <div className={styles.services}>
        <SoftwareDevelopmentContainer
          title="Software development"
          showDivider={true}
          showLearnMore={true}
        />
        <SoftwareDevelopmentContainer
          title="Design"
          showDivider={true}
          showLearnMore={true}
          propBackgroundColor="#b281a5"
        />
        <SoftwareDevelopmentContainer
          title="Web3"
          showDivider={true}
          showLearnMore={true}
          propBackgroundColor="#ff00d6"
        />
      </div>
      <div className={styles.whatWeCanDoButton}>
        <div className={styles.seeWhatWe}>{`See what we can do >`}</div>
      </div>
    </div>
  );
};

export default ServicesContainer;
