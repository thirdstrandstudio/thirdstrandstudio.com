import { FunctionComponent, useEffect } from "react";
import HeaderContainer from "../components/HeaderContainer";
import TimelineTile from "../components/TimelineTile";
import TopTile from "../components/TopTile";
import TechTile from "../components/TechTile1";
import CaseStudies from "../components/CaseStudies";
import ServicesContainer from "../components/ServicesContainer";
import styles from "./Homepage.module.css";
import BookAMeetingContainer1 from "../components/BookAMeetingContainer1";
import { useNavigate } from "react-router-dom";

const Homepage: FunctionComponent = () => {
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
  return (
    <div className={styles.homepage}>
      <HeaderContainer />
      <div className={styles.content}>
        <div className={styles.timeline}>
          <div className={styles.column1}>
            <TimelineTile
              timeline1Icon="/timeline-1-icon.svg"
              title="Project Management"
              establishProjectGoals="Establish project goals"
              estimatingTickets="Estimating tickets"
              confirmRequirements="Confirm requirements"
              developTimeline="Develop timeline"
            />
            <TopTile
              timeline1Icon="/timeline-2-icon.svg"
              timeline1Title={`Building & Develoment`}
              establishProjectGoals="Backend software development"
              topTileMinWidth="10rem"
              topTileMinHeight="20rem"
              projectmanagerWidth="4.688rem"
              projectmanagerHeight="4.688rem"
              timeline1IconWidth="3.75rem"
              timeline1IconHeight="3.75rem"
              timeline1TitleHeight="4.25rem"
            />
          </div>
          <div className={styles.column1}>
            <TimelineTile
              timeline1Icon="/timeline-3-icon.svg"
              title="Testing"
              establishProjectGoals="Control testing"
              estimatingTickets={`Analysis of software & design`}
              confirmRequirements={`Implementation & execution`}
              developTimeline={`Exit criteria & reporting`}
            />
            <TimelineTile
              timeline1Icon="/timeline-4-icon.svg"
              title={`Release & Support`}
              establishProjectGoals="Stage support"
              estimatingTickets="Maintenance"
              confirmRequirements="Monitor for feature additions"
              developTimeline="Further support and management"
            />
          </div>
        </div>
        <div className={styles.servicesTitleParent}>
          <b className={styles.servicesTitle}>Specialities</b>
          <div className={styles.frameParent} data-animate-on-scroll>
            <div className={styles.techTileParent}>
              <TechTile
                typescript="/typescript.svg"
                technologies1Title="TypeScript"
                onClick={() => navigate("/language-01")}
              />
              <TechTile
                typescript="/csharp.svg"
                technologies1Title="C#"
                propPadding="0rem var(--padding-7xs)"
                propFlexDirection="row"
                propWidth="3.769rem"
                propHeight="4.206rem"
                onClick={() => navigate("/language-01")}
              />
              <TechTile
                typescript="/react.svg"
                technologies1Title="React"
                propPadding="var(--padding-7xs) 0rem"
                propFlexDirection="column"
                propWidth="4.094rem"
                propHeight="3.663rem"
                onClick={() => navigate("/language-01")}
              />
            </div>
            <div className={styles.techTileParent}>
              <TechTile
                typescript="/javascript.svg"
                technologies1Title="Java Script"
                propPadding="unset"
                propFlexDirection="row"
                propWidth="4.206rem"
                propHeight="4.206rem"
                onClick={() => navigate("/language-01")}
              />
              
              <TechTile
                typescript="/nodejs.svg"
                technologies1Title="Node.js"
                propPadding="unset"
                propFlexDirection="row"
                propWidth="4.206rem"
                propHeight="4.206rem"
                onClick={() => navigate("/language-01")}
              />
            
              <TechTile
                typescript="/java.svg"
                technologies1Title="Cras vehicula"
                propPadding="unset"
                propFlexDirection="row"
                propWidth="4.125rem"
                propHeight="4.188rem"                
                onClick={() => navigate("/language-01")}
              />
            </div>
            <div className={styles.techTileParent}>
              <TechTile
                typescript="/aws.svg"
                technologies1Title="Amazon AWS"
                propPadding="var(--padding-3xs) 0rem"
                propFlexDirection="column"
                propWidth="4.644rem"
                propHeight="2.788rem"                
                onClick={() => navigate("/language-01")}
              />
              <TechTile
                typescript="/sql.svg"
                technologies1Title="SQL"
                propPadding="unset"
                propFlexDirection="row"
                propWidth="4.15rem"
                propHeight="4.425rem"
                onClick={() => navigate("/language-01")}
              />
              <TechTile
                typescript="/unity.svg"
                technologies1Title="Unity"
                propPadding="var(--padding-12xs) 0rem"
                propFlexDirection="column"
                propWidth="4.15rem"
                propHeight="3.988rem"
                onClick={() => navigate("/language-01")}
              />
            </div>
          </div>
        </div>
        <CaseStudies />
        <ServicesContainer
          servicesTitle="Services"
          title="Software development"
          description="We specialise in developing fine tuned efficient software for multiple We specialise in developing fine tuned efficient software for multiple We specialise in developing fine tuned efficient software for multiple "
          description1="We specialise in developing fine tuned efficient software for multiple We specialise in developing fine tuned efficient software for multiple We specialise in developing fine tuned efficient software for multiple "
          description2="We specialise in developing fine tuned efficient software for multiple We specialise in developing fine tuned efficient software for multiple We specialise in developing fine tuned efficient software for multiple "
          showServicesTitle
          showDivider
          showLearnMore
          dividerVisible
          learnMoreVisible
          dividerVisible1
          learnMoreVisible1
        />
        <BookAMeetingContainer1 showMeetingText={true} />
      </div>
    </div>
  );
};

export default Homepage;
