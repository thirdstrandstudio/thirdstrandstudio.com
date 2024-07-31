import { FunctionComponent, useCallback, useEffect } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import NumberedTextItem, { NumberedTextItemType } from "../components/NumberedTextItem";
import CheckboxWithText, { CheckboxWithTextType } from "../components/CheckboxWithText";
import BookAMeeting from "../components/BookAMeeting";
import Footer from "../components/Footer";
import styles from "./CodePage.module.css";
import MainLayoutWithContact from "../layouts/MainLayoutWithContact";

export type CodePageTitleDesc = {
  title: string;
  description: string;
}

export type QuestionAnswerSection = {  
  leftTitle: string;
  leftDesc?: string;
  leftContent: NumberedTextItemType[]; 
  rightTitle: string;
  rightDesc: string;
  rightContent: CheckboxWithTextType[];
  bottomDividerImage: string;
}

export type ArticleSection = {
  title: string;
  content: CodePageTitleDesc[];
  bottomDividerImage: string;
}

type CodePageProps = {
  mainContent: CodePageTitleDesc;
  articleSections: ArticleSection[];
  sections: QuestionAnswerSection[];
}

const CodePage: FunctionComponent = () => {
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

  const onContactUsButtonClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
    <MainLayoutWithContact
      strapLineData={{
        title: "Smart Contract Development",
        description:
          "Hire a Node.js developer to build fast and scalable web applications, improve user experience, and utilize a vast library of existing modules.",
        descriptionClassName: styles.specialityBody,
        headerImage: "/public/top-section1@3x.png"
      }}
    >
      <div className={styles.content}>
        <div className={styles.gloalWorkspace}>
          <b className={styles.cfTitle}>A Global Workspace</b>
          <div className={styles.workspaceContainer}>
            <div className={styles.workspaces}>
              <div className={styles.workspace01}>
                <div className={styles.divider} />
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
        <div className={styles.divider1} />
        <div className={styles.servicesContainer}>
          <div className={styles.services}>
            <b className={styles.cfTitle}>Why use Node.js?</b>
            <NumberedTextItem
              numberText="1."
              text="A Node.js developer is the right choice if you want to create a customized, high-performance, reliable, and scalable solution."
            />
            <NumberedTextItem
              numberText="2."
              text="A Node.js developer can also be hired to update your existing JavaScript project."
            />
            <NumberedTextItem
              numberText="3."
              text="You can also get an expert opinion and consultation on your Node.js app development from a Node.js developer."
            />
          </div>
          <div className={styles.specialityExamplesRow11}>
            <b className={styles.cfTitle}>
              Top companies using Node.js in their projects
            </b>
            <div className={styles.description3}>
              Node.js has proved itself as a reliable and convienent tool used
              by the worlds most established companies.
            </div>
            <div className={styles.frameParent}>
              <div className={styles.specialityExample1Parent}>
                <CheckboxWithText text="IBM" />
                <CheckboxWithText text="Walmart" />
                <CheckboxWithText text="Mozilla" />
                <CheckboxWithText text="Microsoft" />
              </div>
              <div className={styles.specialityExample1Parent}>
                <CheckboxWithText text="PayPal" />
                <CheckboxWithText text="Ebay" />
                <CheckboxWithText text="Uber" />
                <CheckboxWithText text="Netflix" />
              </div>
              <div className={styles.specialityExample1Parent}>
                <CheckboxWithText text="Yahoo" />
                <CheckboxWithText text="NASA" />
                <CheckboxWithText text="Many more.." />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.divider2} />
        <div className={styles.servicesParent}>
          <div className={styles.services}>
            <div className={styles.servicesTitle1}>
              How much time does it take to develop a Node.js Project?
            </div>
            <div className={styles.specialityTimelinesLeft}>
              There are no specific time limits for Node.js project development.
              In fact, everything depends on the scope, requirements, and type
              of the developed solution. However, according to our experience,
              the average turnaround time is:
            </div>
            <NumberedTextItem
              numberText="1."
              text="4-6 months for customized software development"
            />
            <NumberedTextItem
              numberText="2."
              text="2-5 months for web application development"
            />
            <NumberedTextItem
              numberText="3."
              text="3-6 months for mobile application development"
            />
            <div className={styles.softwareDevelopmentContainer}>
              <div className={styles.softwareDevelopment}>
                <div className={styles.learnMore}>
                  <div className={styles.learnMore1}>{`Learn more >`}</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.specialityExamplesRow11}>
            <b className={styles.cfTitle}>Our developers Node.js expertise.</b>
            <div
              className={styles.description3}
            >{`We specialise in many forms of Node.js production. `}</div>
            <div className={styles.heroStraplineWrapper}>
              <div className={styles.specialityExample1Group}>
                <CheckboxWithText text="Complex single-page apps (SPAs)" />
                <CheckboxWithText text="Browser games" />
                <CheckboxWithText text="Command-line tools" />
                <CheckboxWithText text="Server-side web apps" />
                <CheckboxWithText text="Many other disciplines" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.divider3} />
        <BookAMeeting />
      </div>
    </MainLayoutWithContact>
  );
};

export default CodePage;
