import { FunctionComponent, useCallback, useEffect } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import Blurb from "../components/Blurb";
import CaseStudyTile from "../components/CaseStudyTile";
import BookAMeeting from "../components/BookAMeeting";
import Footer from "../components/Footer";
import styles from "./AboutUs.module.css";

const AboutUs: FunctionComponent = () => {
  const navigate = useNavigate();

  const onContactUsButtonClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  const onShowcase04ContainerClick = useCallback(() => {
    // Please sync "showcase_03" to the project
  }, []);

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

  const onShowcase01ContainerClick = useCallback(() => {
    // Please sync "showcase_02" to the project
  }, []);

  return (
    <div className={styles.aboutUs}>
      <div className={styles.languageTopSection}>
        <Header />
        <div className={styles.languageTitle}>
          <div className={styles.gradientDivider} />
          <div className={styles.heroStrapline}>
            Innovate. Incubate. Impact.
          </div>
          <div className={styles.heroStrapline1}>
            Nurturing Ideas into Successful Ventures
          </div>
          <button
            className={styles.contactUsButton}
            onClick={onContactUsButtonClick}
          >
            <div className={styles.text}>Contact us</div>
          </button>
        </div>
      </div>
      <div className={styles.content}>
        <Blurb
          title="Our incubator program"
          desc="Our Incubator program is dedicated to nurturing creative ideas and transforming them into successful businesses. Whether you're an entrepreneur with a groundbreaking concept or a startup looking for the right support, our Incubator provides the resources, mentorship, and environment needed to thrive."
        />
        <div className={styles.ourCoreValuesContainer}>
          <div className={styles.ourCoreValues}>
            <b className={styles.heroStrapline2}>Here's how it works:</b>
            <div className={styles.services}>
              <div className={styles.softwareDevelopmentContainer}>
                <div className={styles.softwareDevelopment}>
                  <div className={styles.divider} />
                  <div className={styles.titleDescription}>
                    <div className={styles.title}>Ideation</div>
                    <div className={styles.description}>
                      Our team members collaborate and brainstorm innovative
                      ideas, leveraging their unique skills and perspectives. We
                      encourage a culture of creativity, where every idea is
                      valued.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.softwareDevelopmentContainer}>
                <div className={styles.softwareDevelopment}>
                  <div className={styles.divider1} />
                  <div className={styles.titleDescription}>
                    <div className={styles.title}>Validation</div>
                    <div className={styles.description}>
                      Promising concepts are rigorously tested through market
                      research and prototyping. We assess feasibility, market
                      demand, and potential impact to ensure the idea has strong
                      foundations.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.softwareDevelopmentContainer}>
                <div className={styles.softwareDevelopment}>
                  <div className={styles.divider2} />
                  <div className={styles.titleDescription}>
                    <div className={styles.title}>Development</div>
                    <div className={styles.description}>
                      Once validated, our development team takes charge,
                      utilizing our full suite of web development and design
                      resources to build high-quality, scalable products.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.softwareDevelopmentContainer}>
                <div className={styles.softwareDevelopment}>
                  <div className={styles.divider3} />
                  <div className={styles.titleDescription}>
                    <div className={styles.title}>Launch</div>
                    <div className={styles.description}>
                      We strategically plan and execute the launch, ensuring a
                      smooth transition from development to market. Our
                      marketing and sales teams work together to promote the new
                      product and engage with early adopters.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.softwareDevelopmentContainer}>
                <div className={styles.softwareDevelopment}>
                  <div className={styles.divider4} />
                  <div className={styles.titleDescription}>
                    <div className={styles.title}>Growth</div>
                    <div className={styles.description}>
                      Post-launch, we focus on scaling the business, providing
                      ongoing support and leveraging data-driven insights to
                      enhance the product and expand its reach.
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
        <div className={styles.section}>
          <b className={styles.servicesTitle}>Current Projects</b>
          <button
            className={styles.showcase04Container}
            onClick={onShowcase04ContainerClick}
            data-animate-on-scroll
          >
            <div className={styles.showcase04}>
              <div className={styles.info}>
                <div className={styles.tags}>
                  <div className={styles.heroStraplineWrapper}>
                    <div className={styles.heroStrapline3}>Product design</div>
                  </div>
                  <div className={styles.heroStraplineWrapper}>
                    <div className={styles.heroStrapline3}>Web3</div>
                  </div>
                  <div className={styles.heroStraplineWrapper}>
                    <div className={styles.heroStrapline3}>NFT Technology</div>
                  </div>
                </div>
                <b className={styles.title5}>Kitsumon Web3 MOBA Gaming</b>
                <div className={styles.description5}>
                  Kitsumon is an online MOBA game and a virtual world. Read our
                  case study to learn more about the Kitsumon website
                  development.
                </div>
                <div className={styles.learnMore}>
                  <div className={styles.learnMore1}>{`Learn more >`}</div>
                </div>
              </div>
              <img className={styles.imageIcon} alt="" src="/image7@2x.png" />
            </div>
          </button>
          <div className={styles.showcase01ContainerParent}>
            <CaseStudyTile
              title="micasadao.ai"
              description="Discover how Third Strand Studio developed All Links, an intuitive app like Linktree, streamlining social media presence for users."
              image="/image8@2x.png"
            />
            <CaseStudyTile
              title="rentalmaster.ai"
              description="Learn how Third Strand Studio built MySitesLive, a website builder tailored for mortgage advisors in the USA, boosting their online presence."
              image="/image9@2x.png"
            />
          </div>
          <div className={styles.showcase01ContainerParent}>
            <CaseStudyTile
              title="smartformation.ai"
              description="In Kitsumon, players embark on a quest to collect and trade their very own Kitsumon, each possessing distinctive traits, elements, abilities, and rarity levels. "
              image="/image10@2x.png"
            />
            <CaseStudyTile
              title="Mortgage Builder"
              description="We crafted a dynamic one-page website, tailor-made for accredited mortgage advisors, enabling them to showcase their expertise with finesse. "
              image="/image11@2x.png"
            />
          </div>
          <button
            className={styles.showcase01Container}
            onClick={onShowcase01ContainerClick}
            data-animate-on-scroll
          >
            <div className={styles.showcase04}>
              <div className={styles.info}>
                <div className={styles.tags}>
                  <div className={styles.heroStraplineWrapper}>
                    <div className={styles.heroStrapline3}>Product design</div>
                  </div>
                  <div className={styles.heroStraplineWrapper}>
                    <div className={styles.heroStrapline3}>Web3</div>
                  </div>
                  <div className={styles.heroStraplineWrapper}>
                    <div className={styles.heroStrapline3}>NFT Technology</div>
                  </div>
                </div>
                <b
                  className={styles.title5}
                >{`Web3 Gaming NFT Guild, Marketplace & UI`}</b>
                <div className={styles.description6}>
                  Kitsumon is an online MOBA game and a virtual world. Read our
                  case study to learn more about the Kitsumon website
                  development.
                </div>
                <div className={styles.learnMore}>
                  <div className={styles.learnMore1}>{`Learn more >`}</div>
                </div>
              </div>
              <img className={styles.imageIcon} alt="" src="/image12@2x.png" />
            </div>
          </button>
        </div>
        <div className={styles.gloalWorkspace}>
          <b className={styles.servicesTitle}>Current Projects</b>
          <div className={styles.workspaceContainer}>
            <div className={styles.workspaces}>
              <div className={styles.workspace01}>
                <div className={styles.divider5} />
              </div>
              <div className={styles.titleDescription}>
                <div className={styles.title}>Welcome to the incubator</div>
                <div className={styles.description}>
                  At Third Strand Studios, we harness the collective creativity
                  of our team to fuel our Incubator program. Unlike traditional
                  incubators, we focus exclusively on nurturing ideas generated
                  within our own company. Our talented designers, developers,
                  and strategists collaborate to identify and develop innovative
                  solutions that address real-world challenges.
                </div>
              </div>
              <div className={styles.titleDescription}>
                <div className={styles.title}>Letting ideas flourish</div>
                <div className={styles.description}>
                  Our Incubator program transforms these internal ideas into
                  market-ready products through a structured and supportive
                  process. From initial brainstorming sessions to rigorous
                  validation and meticulous development, we ensure every idea is
                  given the opportunity to flourish. The result is a portfolio
                  of successful ventures that not only showcase our expertise
                  but also make a meaningful impact in the industry.
                </div>
              </div>
            </div>
          </div>
        </div>
        <BookAMeeting />
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
