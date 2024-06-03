import { FunctionComponent } from "react";
import LanguageTopSection from "../components/LanguageTopSection";
import ServicesContainer from "../components/ServicesContainer";
import styles from "./AboutUs.module.css";
import BookAMeetingContainer1 from "../components/BookAMeetingContainer1";

const AboutUs: FunctionComponent = () => {
  return (
    <div className={styles.aboutUs}>
      <LanguageTopSection />
      <div className={styles.content}>
        <div className={styles.ourCoreValuesContainer}>
          <div className={styles.ourCoreValues}>
            <b className={styles.heroStrapline}>Our Core Values</b>
            <div className={styles.services}>
              <div className={styles.softwareDevelopmentContainer}>
                <div className={styles.softwareDevelopment}>
                  <div className={styles.divider} />
                  <div className={styles.titleDescription}>
                    <div className={styles.title}>Client-Centric</div>
                    <div className={styles.description}>
                      Dedicated to delivering exceptional customer service, we
                      forge lasting partnerships with clients worldwide. We
                      prioritize understanding our clients' unique requirements
                      and empower them with tailored tools and resources,
                      ensuring their success in the digital landscape.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.softwareDevelopmentContainer}>
                <div className={styles.softwareDevelopment}>
                  <div className={styles.divider1} />
                  <div className={styles.titleDescription}>
                    <div className={styles.title}>
                      Collaborataion at the Heart
                    </div>
                    <div className={styles.description}>
                      We firmly believe that exceptional software emerges from
                      close collaboration. By working hand-in-hand with our
                      clients, we delve deep into their challenges, comprehend
                      their objectives, and develop customized solutions aligned
                      with their business goals.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.softwareDevelopmentContainer}>
                <div className={styles.softwareDevelopment}>
                  <div className={styles.divider2} />
                  <div className={styles.titleDescription}>
                    <div className={styles.title}>Pursuit of Excellence</div>
                    <div className={styles.description}>
                      Excellence is our guiding principle, permeating every
                      stage of our software development process. From
                      conceptualization to delivery, we uphold the highest
                      standards to provide our clients with top-notch products
                      that exceed expectations.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.softwareDevelopmentContainer}>
                <div className={styles.softwareDevelopment}>
                  <div className={styles.divider3} />
                  <div className={styles.titleDescription}>
                    <div className={styles.title}>Innovation Unleashed</div>
                    <div className={styles.description}>
                      Our commitment to innovation drives us to explore
                      uncharted territories in software development. We
                      constantly seek inventive solutions to our clients'
                      business dilemmas, pushing boundaries and pioneering new
                      approaches to meet the ever-evolving demands of the
                      digital landscape.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.images}>
            <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
          </div>
        </div>
        <div className={styles.gloalWorkspace}>
          <b className={styles.workspaceTitle}>A Global Workspace</b>
          <div className={styles.workspaceContainer}>
            <div className={styles.workspaces}>
              <div className={styles.workspace01}>
                <div className={styles.divider4} />
              </div>
              <div className={styles.titleDescription}>
                <div className={styles.title}>A Nexus of Creativity</div>
                <div className={styles.description}>
                  In this virtual landscape, creativity knows no borders. Third
                  Strand Studio serves as a nexus of innovation where ideas flow
                  freely, nurtured by the collective energy of our global team.
                  Our virtual space is alive with collaboration, fostering an
                  environment where creativity flourishes.
                </div>
              </div>
              <div className={styles.titleDescription}>
                <div className={styles.title}>
                  Unlimited Support, Anytime, Anywhere
                </div>
                <div className={styles.description}>
                  Regardless of the time zone, our dedicated community stands
                  united. Here, we support one another, inspire greatness, and
                  transform imaginative concepts into tangible digital
                  realities. Our virtual workspace is not confined by walls;
                  it's a boundless arena where passion meets expertise.
                </div>
              </div>
              <div className={styles.titleDescription}>
                <div className={styles.title}>More Than an Office</div>
                <div className={styles.description}>
                  <p className={styles.atThirdStrand}>
                    At Third Strand Studio, our workspace isn't just a physical
                    location—it's a mindset. It's the shared enthusiasm for
                    Web3, crypto payment systems, and video games that unites us
                    across continents. It's the commitment to excellence and the
                    drive to innovate that fuels our collective ambition.
                  </p>
                  <p className={styles.atThirdStrand}>&nbsp;</p>
                  <p className={styles.atThirdStrand}>
                    Join us in this borderless journey at Third Strand Studio,
                    where creativity knows no bounds, and together, we redefine
                    the possibilities of digital exploration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
          propPadding="unset"
          propAlignSelf="stretch"
          propWidth="unset"
          servicesWidth="100%"
          softwareDevelopmentFontSize="20px"
          softwareDevelopmentLineHeight="160%"
          softwareDevelopmentFontWeight="600"
          dividerLineHeight="160%"
          dividerColor="rgba(255, 255, 255, 0.8)"
          titleDescriptionAlignSelf="stretch"
          titleDescriptionWidth="unset"
          servicesWidth1="100%"
          softwareDevelopmentFontSize1="20px"
          softwareDevelopmentLineHeight1="160%"
          softwareDevelopmentFontWeight1="600"
          dividerLineHeight1="160%"
          dividerColor1="rgba(255, 255, 255, 0.8)"
          titleDescriptionAlignSelf1="stretch"
          titleDescriptionWidth1="unset"
          servicesWidth2="100%"
          softwareDevelopmentFontSize2="20px"
          softwareDevelopmentLineHeight2="160%"
          softwareDevelopmentFontWeight2="600"
          dividerLineHeight2="160%"
          dividerColor2="rgba(255, 255, 255, 0.8)"
          titleDescriptionAlignSelf2="stretch"
          titleDescriptionWidth2="unset"
        />
        <BookAMeetingContainer1 showMeetingText={true} />
      </div>
    </div>
  );
};

export default AboutUs;
