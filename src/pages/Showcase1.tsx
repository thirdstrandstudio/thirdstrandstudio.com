import { FunctionComponent, useCallback } from "react";
import TopSection from "../components/TopSection";
import BookAMeetingContainer1 from "../components/BookAMeetingContainer1";
import styles from "./Showcase1.module.css";

const Showcase1: FunctionComponent = () => {
  return (
    <div className={styles.showcase02}>
      <TopSection
        heroStrapline="alllinks.online Empowering Connections, One Link at a Time"
        desktopHeaderBackgroundImage="url('/top-section1@3x.png')"
      />
      <div className={styles.showcaseContent01}>
        <div className={styles.showcaseOverview}>
          Welcome to alllinks.online, a groundbreaking link aggregator platform
          that redefines online presence for creators, entrepreneurs, and
          businesses alike. Unlike any other, alllinks.online is more than just
          a link aggregator; it's a vibrant ecosystem where innovation meets
          functionality. Our team at third strand studios proudly crafted this
          platform, enriching it with an array of features designed to elevate
          your digital presence effortlessly.
        </div>
        <b className={styles.heroStrapline}>Revolutionizing Digital Spaces</b>
        <div className={styles.showcaseOverview}>
          At the core of alllinks.online lies its ability to transform a simple
          link into a captivating digital storefront. Beyond the traditional
          link aggregator pages, we offer a world of possibilities. Users can
          enhance their profiles with bolt-on packages, ranging from online
          shops, ticket sales, property rentals, personal websites, to donation
          and subscription services. This versatility allows creators, small
          companies, restaurants, clothing shops, property rentals, podcasts,
          and content creators to tailor their alllinks pages to mirror their
          brand identity and showcase their offerings effectively.
        </div>
      </div>
      <img
        className={styles.showcaseImage02Icon}
        alt=""
        src="/showcase_image_02-2.png"
      />
      <div className={styles.showcaseContent02}>
        <b className={styles.heroStrapline2}>Seamless Setup, Instant Launch</b>
        <div className={styles.heroStrapline3}>
          With alllinks.online, setting up a website is no longer a daunting
          task. In just a few minutes, users can establish their online presence
          and start selling products or services effortlessly. Payments are
          simplified, supporting popular methods like PayPal, Stripe, and even
          cryptocurrencies, ensuring secure transactions for both sellers and
          buyers. We've meticulously designed the platform with a user-friendly
          interface, ensuring a hassle-free experience from registration to
          launch.
        </div>
      </div>
      <img
        className={styles.showcaseImage02Icon}
        alt=""
        src="/showcase_image_02-3.png"
      />
      <div className={styles.showcaseContent02}>
        <b className={styles.heroStrapline2}>
          Customization, Tailored to Perfection
        </b>
        <div className={styles.heroStrapline3}>
          Expressing individuality and brand identity is paramount.
          AllLinks.online offers a rich palette of customization options. Users
          can infuse their profiles with a splash of colors, vibrant images, and
          personalized content, ensuring their digital space aligns seamlessly
          with their vision. Our intuitive tools empower users to create
          visually appealing, engaging pages that leave a lasting impression.
        </div>
      </div>
      <img
        className={styles.showcaseImage03Icon}
        alt=""
        src="/showcase_image_03-1.png"
      />
      <div className={styles.showcaseContent02}>
        <b className={styles.heroStrapline2}>
          Affordable Excellence, Diverse Tiers
        </b>
        <div className={styles.heroStrapline3}>
          We believe in democratizing online presence. AllLinks.online offers
          different tiers, ensuring accessibility for all. Our low-cost systems,
          coupled with unparalleled ease of use, make premium features
          accessible to businesses of all sizes. Whether you're a budding
          entrepreneur or an established company, AllLinks.online welcomes you
          to explore a world where creativity knows no bounds.
        </div>
      </div>
      <div className={styles.bottomSection}>
        <BookAMeetingContainer1
          showMeetingText
          meetingTextPadding="var(--padding-29xl) var(--padding-5xl) 0rem"
          meetingTextWidth="100%"
          meetingTextFlex="unset"
          meetingTextTitlePadding="0rem var(--padding-base)"
          meetingTextTitleFlex="1"
          meetingTextTitleWidth="unset"
          meetingText1Width="2.875rem"
          meetingText1Height="2.875rem"
          meetingText2Width="2.875rem"
          meetingText2Height="2.606rem"
          meetingText3Width="2.875rem"
          meetingText3Height="2.875rem"
          cFMessageFieldHeight="11.25rem"
          bySubmittingThisHeight="1.625rem"
        />
      </div>
    </div>
  );
};

export default Showcase1;
