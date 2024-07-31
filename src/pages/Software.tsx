import { FunctionComponent, useCallback, useEffect } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import Blurb from "../components/Blurb";
import StatisticTile from "../components/StatisticTile";
import ArticleFullRow from "../components/ArticleFullRow";
import CaseStudyTile from "../components/CaseStudyTile";
import BookAMeeting from "../components/BookAMeeting";
import Footer from "../components/Footer";
import styles from "./Software.module.css";

const Software: FunctionComponent = () => {
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
    <div className={styles.software}>
      <div className={styles.container}>
        <div className={styles.section}>
          <Header />
          <div className={styles.container1}>
            <div className={styles.container2}>
              <div className={styles.margin}>
                <div className={styles.breadcrumbs}>
                  <div className={styles.link}>
                    <div className={styles.home}>Home</div>
                  </div>
                  <div className={styles.div}>/</div>
                  <div className={styles.link1}>
                    <div className={styles.home}>Services</div>
                  </div>
                  <div className={styles.div}>/</div>
                  <div className={styles.softwareDevelopment}>
                    Software Development
                  </div>
                </div>
              </div>
              <div className={styles.heroText}>
                <div className={styles.heading1margin}>
                  <div className={styles.heading1}>
                    <b className={styles.softwareDevelopment1}>
                      Software Development
                    </b>
                  </div>
                </div>
                <div className={styles.container3}>
                  <div className={styles.empoweringBusinessesWith}>
                    Empowering businesses with custom software solutions
                    tailored to drive innovation and efficiency.
                  </div>
                </div>
                <div className={styles.contactUsButtonWrapper}>
                  <button
                    className={styles.contactUsButton}
                    onClick={onContactUsButtonClick}
                  >
                    <div className={styles.text}>Contact us</div>
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.picture}>
              <img
                className={styles.modeAppPicturepngIcon}
                alt=""
                src="/modeapppicturepng@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.section1}>
          <Blurb
            title="We deliver excellence"
            desc="Explore how we develop seamless software platforms that integrate data analytics, automation, and user-centric design, delivering unmatched performance and scalability for businesses worldwide."
          />
        </div>
        <div className={styles.section2}>
          <div className={styles.margin1}>
            <div className={styles.overview}>
              <div className={styles.margin2}>
                <div className={styles.container4}>
                  <div className={styles.heading2margin}>
                    <div className={styles.heading1}>
                      <b className={styles.learnHowWe}>Software Development</b>
                    </div>
                  </div>
                  <div className={styles.paragraph}>
                    <div className={styles.atThirdStrand}>
                      At Third Strand Studio, we deliver bespoke software
                      development services tailored to your unique needs. Our
                      experienced team collaborates to create high-quality
                      software solutions that enhance operations and drive
                      growth. From initial consultation to deployment, we ensure
                      a seamless process with a focus on cutting-edge
                      technologies and industry best practices.
                    </div>
                    <div className={styles.atThirdStrand}>
                      Whether you need a custom application, a mobile app, or
                      enterprise software, we transform your ideas into powerful
                      and reliable solutions. Our commitment to high-quality
                      results ensures your business meets its goals and stays
                      competitive in the digital landscape.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.container5}>
                <div className={styles.container6}>
                  <div className={styles.industry}>Industry</div>
                  <div className={styles.container7}>
                    <div className={styles.fintechBlockchainGame}>
                      Fintech, Blockchain, Game Development, Retail
                    </div>
                  </div>
                </div>
                <div className={styles.container6}>
                  <div className={styles.industry}>Services Provided</div>
                  <div className={styles.container7}>
                    <div className={styles.fintechBlockchainGame}>
                      Custom Software Development, Mobile App Development, Web
                      Application Development, Enterprise Solutions, API
                      Development and Integration, Cloud Solutions, Software
                      Testing and QA, UI/UX, Design, Maintenance and Support,
                      Software Modernization
                    </div>
                  </div>
                </div>
                <div className={styles.container6}>
                  <div className={styles.industry}>Tech Stack</div>
                  <div className={styles.container7}>
                    <div className={styles.fintechBlockchainGame}>
                      Programming Languages (e.g., Python, JavaScript, Java, C#,
                      Swift), Frameworks and Libraries (e.g., React.js, Angular,
                      Django, Flask, Spring), Databases (e.g., MySQL,
                      PostgreSQL, MongoDB, Redis), Cloud Services (e.g., AWS,
                      Azure, Google Cloud Platform), DevOps Tools (e.g., Docker,
                      Kubernetes, Jenkins), Version Control (e.g., Git, SVN),
                      Integrated Development Environments (IDEs)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.container12}>
            <StatisticTile statValue="12" desc="Programming Languages" />
            <StatisticTile statValue="UK" desc="Country" textColor="#ff00d6" />
            <StatisticTile
              statValue="10+ Years"
              desc="Experience"
              textColor="#65ff74"
            />
          </div>
        </div>
        <div className={styles.section3}>
          <div className={styles.container13}>
            <div className={styles.container14}>
              <div className={styles.heading21}>
                <b className={styles.learnHowWe}>Learn how we help</b>
              </div>
            </div>
            <ArticleFullRow
              desc="Third Strand Studio specialize in delivering tailored software solutions that align perfectly with your business objectives. Our team of skilled developers, designers, and strategists collaborates closely with you to understand your unique requirements and challenges. From initial concept to final deployment, we ensure every step of the process is focused on delivering high-quality, scalable, and secure software solutions that drive your business forward."
              title="About"
              image="/abouttheprojectpng1@2x.png"
            />
            <div className={styles.articleRight}>
              <div className={styles.container15}>
                <div className={styles.picture1}>
                  <img
                    className={styles.image3Icon}
                    alt=""
                    src="/image-3@2x.png"
                  />
                </div>
              </div>
              <div className={styles.container16}>
                <div className={styles.heading1}>
                  <b className={styles.workflow}>Workflow</b>
                </div>
                <div className={styles.container17}>
                  <div className={styles.ourSoftwareDevelopment}>
                    Our software development workflow is meticulously crafted to
                    ensure efficiency and transparency at every stage. Beginning
                    with detailed planning and requirements gathering, we move
                    into robust design and architecture phases where our team
                    creates comprehensive blueprints for your software solution.
                    Development follows agile methodologies, allowing for
                    iterative improvements and quick adaptation to evolving
                    needs. Rigorous testing and quality assurance processes
                    ensure that your software meets the highest standards before
                    deployment. Post-launch, we provide continuous support and
                    maintenance to keep your software running smoothly and
                    securely.
                  </div>
                </div>
              </div>
            </div>
            <ArticleFullRow
              desc="In software development, challenges are opportunities for innovation and improvement. At [Your Company Name], we thrive on solving complex technical problems. Our team excels in tackling scalability issues, integrating diverse systems, optimizing performance, and ensuring data security. Through rigorous testing and meticulous attention to detail, we address challenges head-on to deliver robust, reliable, and user-friendly software solutions that exceed expectations."
              title="Challenges"
              image="/abouttheprojectpng2@2x.png"
            />
            <div className={styles.articleRight}>
              <div className={styles.container15}>
                <div className={styles.picture1}>
                  <img
                    className={styles.image3Icon}
                    alt=""
                    src="/image-31@2x.png"
                  />
                </div>
              </div>
              <div className={styles.container16}>
                <div className={styles.heading1}>
                  <b className={styles.workflow}>Features</b>
                </div>
                <div className={styles.container20}>
                  <div className={styles.ourSoftwareDevelopment1}>
                    Our software solutions are designed to empower your business
                    with cutting-edge features that enhance productivity,
                    efficiency, and user satisfaction. Whether it's intuitive
                    user interfaces, real-time analytics, seamless integration
                    with third-party platforms, or scalable architecture, we
                    prioritize features that align with your strategic goals.
                    From mobile responsiveness to advanced customization
                    options, our goal is to equip you with software that not
                    only meets but surpasses your expectations, setting your
                    business apart in today's competitive landscape.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.section4}>
          <div className={styles.container21}>
            <div className={styles.articleTile}>
              <div className={styles.container22}>
                <div className={styles.heading1}>
                  <b className={styles.learnHowWe}>Solutions</b>
                </div>
                <div className={styles.container17}>
                  <div className={styles.ourSoftwareDevelopment}>
                    We offer comprehensive software solutions designed to
                    address specific business challenges and accelerate growth.
                    Whether you're looking to streamline operations with
                    custom-built applications, enhance customer engagement
                    through intuitive mobile apps, or optimize backend processes
                    with robust enterprise solutions, we have the expertise to
                    deliver tailored solutions that align with your strategic
                    objectives. Our approach blends creativity with technical
                    expertise, ensuring that each solution not only meets but
                    exceeds your expectations. With a commitment to innovation
                    and quality, we empower businesses to thrive in a
                    digital-first world, providing the tools and support needed
                    to achieve lasting success. Partner with us to transform
                    your ideas into impactful solutions that drive tangible
                    results and propel your business forward.
                  </div>
                </div>
              </div>
              <div className={styles.margin3}>
                <img
                  className={styles.image1Icon}
                  alt=""
                  src="/image-11@2x.png"
                />
              </div>
            </div>
            <div className={styles.container24}>
              <div className={styles.articleVertical}>
                <div className={styles.container25}>
                  <div className={styles.heading1}>
                    <div className={styles.ourSoftwareDevelopment}>
                      <p className={styles.ourApproachBegins}>
                        Our approach begins with thorough market research and
                        analysis to understand industry trends, user behaviors,
                        and technological advancements. This foundation allows
                        us to design and develop software that not only meets
                        current standards but also anticipates future demands.
                      </p>
                      <p className={styles.ourApproachBegins}>&nbsp;</p>
                      <p className={styles.ourApproachBegins}>
                        With expertise in cross-platform development, we ensure
                        seamless compatibility and optimal performance across
                        various devices, including desktops, tablets, and
                        smartphones. Our team of skilled developers utilizes
                        industry-leading frameworks and methodologies to create
                        responsive and intuitive user interfaces, enhancing user
                        experience across different platforms.
                      </p>
                      <p className={styles.ourApproachBegins}>&nbsp;</p>
                      <p className={styles.ourApproachBegins}>
                        By combining research-driven insights with technical
                        excellence, we empower businesses to reach their target
                        audience effectively and maximize their digital
                        presence. Whether you need a custom mobile app, a
                        scalable web application, or integrated enterprise
                        software, our commitment to innovation and quality
                        ensures that your software solution is not only
                        functional but also future-proof. Partner with us to
                        harness the power of research-backed solutions and stay
                        ahead in today's dynamic digital landscape.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.container26}>
                  <img
                    className={styles.modeApppngIcon}
                    alt=""
                    src="/modeapppng@2x.png"
                  />
                </div>
              </div>
              <div className={styles.articleVertical1}>
                <div className={styles.container25}>
                  <div className={styles.heading1}>
                    <div className={styles.ourSoftwareDevelopment}>
                      We specialize in designing backend admin panels that
                      prioritize simplicity and ease of use for our clients. Our
                      goal is to empower you with intuitive tools that
                      streamline management tasks and boost productivity.
                      Featuring clean, user-friendly interfaces and
                      straightforward navigation, our admin panels are tailored
                      to simplify content management, data analysis, and
                      configuration settings. Whether you're a small business or
                      a large enterprise, our backend solutions are crafted to
                      enhance operational efficiency, allowing you to focus more
                      on strategic initiatives and less on technical
                      complexities.
                    </div>
                  </div>
                </div>
                <div className={styles.container26}>
                  <img
                    className={styles.modeApppngIcon}
                    alt=""
                    src="/modeapppng1@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.section4}>
          <div className={styles.articleTile1}>
            <div className={styles.container22}>
              <div className={styles.heading1}>
                <b className={styles.learnHowWe}>Client Success</b>
              </div>
              <div className={styles.container17}>
                <div className={styles.ourSoftwareDevelopment}>
                  <p className={styles.ourApproachBegins}>
                    Client success is at the heart of everything we do. We take
                    pride in our ability to collaborate closely with our
                    clients, understanding their unique challenges and goals to
                    deliver exceptional software solutions. Our success is
                    measured by the success of our clients—whether it's
                    improving operational efficiency, increasing customer
                    satisfaction, or achieving significant business growth.
                  </p>
                  <p className={styles.ourApproachBegins}>&nbsp;</p>
                  <p className={styles.ourApproachBegins}>
                    Through continuous communication, proactive problem-solving,
                    and a commitment to excellence, we build long-lasting
                    partnerships that drive mutual success. With a proven track
                    record of delivering impactful results across industries, we
                    are dedicated to exceeding client expectations and ensuring
                    their continued satisfaction. Partner with us and experience
                    firsthand how our tailored software solutions can transform
                    your business and propel you towards your goals.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.margin3}>
              <img
                className={styles.image1Icon}
                alt=""
                src="/image-12@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.section6}>
          <b className={styles.servicesTitle}>Case Studies</b>
          <button
            className={styles.showcase04Container}
            onClick={onShowcase04ContainerClick}
            data-animate-on-scroll
          >
            <div className={styles.showcase04}>
              <div className={styles.info}>
                <div className={styles.tags}>
                  <div className={styles.heroStraplineWrapper}>
                    <div className={styles.heroStrapline}>Product design</div>
                  </div>
                  <div className={styles.heroStraplineWrapper}>
                    <div className={styles.heroStrapline}>Web3</div>
                  </div>
                  <div className={styles.heroStraplineWrapper}>
                    <div className={styles.heroStrapline}>NFT Technology</div>
                  </div>
                </div>
                <b className={styles.title}>Kitsumon Web3 MOBA Gaming</b>
                <div className={styles.description}>
                  Kitsumon is an online MOBA game and a virtual world. Read our
                  case study to learn more about the Kitsumon website
                  development.
                </div>
                <div className={styles.learnMore}>
                  <div className={styles.learnMore1}>{`Learn more >`}</div>
                </div>
              </div>
              <img className={styles.imageIcon} alt="" src="/image13@2x.png" />
            </div>
          </button>
          <div className={styles.showcase01ContainerParent}>
            <CaseStudyTile
              title="All Links Platform"
              description="Discover how Third Strand Studio developed All Links, an intuitive app like Linktree, streamlining social media presence for users."
              image="/image14@2x.png"
            />
            <CaseStudyTile
              title="MySitesLive Builder"
              description="Learn how Third Strand Studio built MySitesLive, a website builder tailored for mortgage advisors in the USA, boosting their online presence."
              image="/image15@2x.png"
            />
          </div>
          <div className={styles.showcase01ContainerParent}>
            <CaseStudyTile
              title="Kitsumon"
              description="In Kitsumon, players embark on a quest to collect and trade their very own Kitsumon, each possessing distinctive traits, elements, abilities, and rarity levels. "
              image="/image16@2x.png"
            />
            <CaseStudyTile
              title="Mortgage Builder"
              description="We crafted a dynamic one-page website, tailor-made for accredited mortgage advisors, enabling them to showcase their expertise with finesse. "
              image="/image17@2x.png"
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
                    <div className={styles.heroStrapline}>Product design</div>
                  </div>
                  <div className={styles.heroStraplineWrapper}>
                    <div className={styles.heroStrapline}>Web3</div>
                  </div>
                  <div className={styles.heroStraplineWrapper}>
                    <div className={styles.heroStrapline}>NFT Technology</div>
                  </div>
                </div>
                <b
                  className={styles.title}
                >{`Web3 Gaming NFT Guild, Marketplace & UI`}</b>
                <div className={styles.description1}>
                  Kitsumon is an online MOBA game and a virtual world. Read our
                  case study to learn more about the Kitsumon website
                  development.
                </div>
                <div className={styles.learnMore}>
                  <div className={styles.learnMore1}>{`Learn more >`}</div>
                </div>
              </div>
              <img className={styles.imageIcon} alt="" src="/image18@2x.png" />
            </div>
          </button>
        </div>
        <div className={styles.section4}>
          <BookAMeeting />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Software;
