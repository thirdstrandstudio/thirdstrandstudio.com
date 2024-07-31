import { FunctionComponent, useEffect } from "react";
import Header from "../components/Header";
import Tag from "../components/Tag";
import Blurb from "../components/Blurb";
import BookAMeeting from "../components/BookAMeeting";
import Footer from "../components/Footer";
import styles from "./Showcase.module.css";

const Showcase: FunctionComponent = () => {
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
    <div className={styles.showcase01}>
      <div className={styles.topSection}>
        <Header />
        <div className={styles.heroStraplineContainer}>
          <div className={styles.heroStrapline} data-animate-on-scroll>
            <div className={styles.gradientDivider} />
            <div className={styles.heroStrapline1}>
              Customisable Mortgage Advisor Website
            </div>
          </div>
        </div>
      </div>
      <div className={styles.tags}>
        <Tag text="UI/UX" textColor="#65ff74" />
        <Tag text="Design" textColor="#65ff74" />
        <Tag text="Software Development" textColor="#65FF74" />
        <Tag text="C+" textColor="#ff00d6" />
        <Tag text="React" textColor="#ff00d6" />
        <Tag text="C+" textColor="#ff00d6" />
      </div>
      <Blurb
        title="We deliver excellence"
        desc="Explore how we develop seamless software platforms that integrate data analytics, automation, and user-centric design, delivering unmatched performance and scalability for businesses worldwide."
      />
      <div className={styles.showcaseContent01}>
        <div className={styles.showcaseOverview}>
          <p className={styles.atThirdStrand}>
            At third strand studios, we took a visionary approach to
            revolutionize the mortgage advisory experience. We crafted a dynamic
            one-page website, tailor-made for accredited mortgage advisors,
            enabling them to showcase their expertise with finesse. Our
            development and design team collaborated seamlessly to bring this
            innovative platform to life, emphasizing both functionality and
            aesthetics.
          </p>
        </div>
        <b className={styles.heroStrapline2}>What We Did</b>
        <div className={styles.showcaseOverview}>
          Our development and design experts meticulously crafted a
          user-friendly interface that seamlessly integrates essential elements
          to enhance the mortgage advisory process. From a robust mortgage
          calculator, showcasing past client testimonials, to scheduling
          consultations effortlessly – every feature was carefully designed and
          implemented.
        </div>
      </div>
      <img
        className={styles.showcaseImage02Icon}
        alt=""
        src="/showcase-image-02@2x.png"
      />
      <div className={styles.showcaseContent02}>
        <b className={styles.heroStrapline4}>Customisation at It’s Core</b>
        <div className={styles.heroStrapline5}>
          Understanding the unique identity of each mortgage advisor, we offered
          a level of customization unparalleled in the industry. We provided a
          palette of vibrant color choices and an array of fonts, allowing
          advisors to curate a website that resonates with their personal brand.
          The layout was made highly adaptable, ensuring every advisor's page is
          as unique as their services.
        </div>
      </div>
      <div className={styles.showcaseContent02}>
        <b className={styles.heroStrapline4}>Seamless Backend Management</b>
        <div className={styles.heroStrapline5}>
          Behind the captivating frontend, we've engineered an intuitive and
          robust backend system tailored specifically for mortgage advisors. Our
          extensive backend empowers advisors to take control of their online
          presence effortlessly. With a clean and user-friendly interface,
          uploading essential information, images, and YouTube videos is a
          breeze. Advisors can effortlessly manage their content, ensuring their
          website stays up-to-date and reflective of their evolving expertise.
          Our streamlined backend not only simplifies the process but also saves
          valuable time, allowing advisors to focus on what they do best –
          providing exceptional mortgage guidance to their clients. At [Your
          Company Name], we believe that technology should enhance, not
          complicate. That's why we've crafted a backend experience that is as
          exceptional as the frontend, ensuring a seamless journey for both
          advisors and their clients.
        </div>
      </div>
      <img
        className={styles.showcaseImage02Icon}
        alt=""
        src="/showcase-image-021@2x.png"
      />
      <div className={styles.showcaseContent02}>
        <b className={styles.heroStrapline4}>Key Features</b>
        <div className={styles.heroStrapline9}>
          <ol className={styles.mortgageCalculatorEmpowerC}>
            <li className={styles.mortgageCalculatorEmpower}>
              Mortgage Calculator: Empower clients with accurate estimations
              tailored to their needs.
            </li>
            <li className={styles.mortgageCalculatorEmpower}>
              Client Testimonials: Genuine reviews from satisfied clients,
              building trust and credibility.
            </li>
            <li className={styles.mortgageCalculatorEmpower}>
              Consultation Scheduling: Streamlined scheduling system for
              hassle-free client appointments.
            </li>
            <li className={styles.mortgageCalculatorEmpower}>
              About Me Section: Personalized space for advisors to share their
              story, expertise, and passion.
            </li>
            <li className={styles.mortgageCalculatorEmpower}>
              YouTube Integration: Engaging video content to enrich the
              visitor's experience and foster a connection.
            </li>
            <li>{`Custom Color Palettes & Fonts: Tailor the visual identity to reflect individual style and professionalism.`}</li>
          </ol>
        </div>
      </div>
      <img
        className={styles.showcaseImage03Icon}
        alt=""
        src="/showcase-image-03@2x.png"
      />
      <div className={styles.bottomSection}>
        <b className={styles.heroStrapline4}>
          With our innovative approach, we've not only created a website but a
          powerful tool for mortgage advisors to establish their online presence
          effectively. Join hands with us, and let's transform your advisory
          business into an engaging digital journey.
        </b>
        <BookAMeeting />
      </div>
      <Footer />
    </div>
  );
};

export default Showcase;
