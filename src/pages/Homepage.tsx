import { FunctionComponent } from "react";
import Blurb from "../components/Blurb";
import ServiceTile from "../components/ServiceTile";
import CaseStudiesSection from "../components/CaseStudiesSection";
import CompaniesElevatedSection from "../components/CompaniesElevatedSection";
import ArticleLeft from "../components/ArticleLeft";
import LanguageSection from "../components/LanguageSection";
import BookAMeeting from "../components/BookAMeeting";
import styles from "./Homepage.module.css";
import MainLayoutWithContact from "../layouts/MainLayoutWithContact";

const Homepage: FunctionComponent = () => {
  return (
    <MainLayoutWithContact
      strapLineData={{
        title: "Tailored software for the extraordinary",
        description:
          "Unleash the Power of Web3, Blockchain, and Game Development with Third Strand Studio",
      }}
    >
      <div className={styles.container}>
        <Blurb
          title="We deliver excellence"
          desc="Explore how we develop seamless software platforms that integrate data analytics, automation, and user-centric design, delivering unmatched performance and scalability for businesses worldwide."
        />
        <div className={styles.servicesContainer}>
          <b className={styles.servicesTitle}>Services</b>
          <div className={styles.services}>
            <ServiceTile
              title="Software development"
              href="/services/software"
              description="We specialise in developing fine tuned efficient software for multiple We specialise in developing fine tuned efficient software for multiple We specialise in developing fine tuned efficient software for multiple "
            />
            <ServiceTile
              title="Design"
              href="/services/design"
              description="We specialise in developing fine tuned efficient software for multiple We specialise in developing fine tuned efficient software for multiple We specialise in developing fine tuned efficient software for multiple "
              dividerColor="#b281a5"
            />
            <ServiceTile
              title="Web3"
              href="/services/web3"
              description="We specialise in developing fine tuned efficient software for multiple We specialise in developing fine tuned efficient software for multiple We specialise in developing fine tuned efficient software for multiple "
              dividerColor="#ff00d6"
            />
          </div>
          <div className={styles.whatWeCanDoButton}>
            <div className={styles.seeWhatWe}>{`See what we can do >`}</div>
          </div>
        </div>
        <CaseStudiesSection />
        <CompaniesElevatedSection />
        <ArticleLeft
          title="About"
          desc="Third Strand Studio specialize in delivering tailored software solutions that align perfectly with your business objectives. Our team of skilled developers, designers, and strategists collaborates closely with you to understand your unique requirements and challenges. From initial concept to final deployment, we ensure every step of the process is focused on delivering high-quality, scalable, and secure software solutions that drive your business forward."
          image="/abouttheprojectpng@2x.png"
        />
        <LanguageSection />
        <BookAMeeting />
      </div>
    </MainLayoutWithContact>
  );
};

export default Homepage;
