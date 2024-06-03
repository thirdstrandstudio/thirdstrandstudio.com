import { FunctionComponent, useCallback } from "react";
import TopSection from "../components/TopSection";
import BookAMeetingContainer1 from "../components/BookAMeetingContainer1";
import Footer from "../components/Footer";
import styles from "./Showcase2.module.css";

const Showcase2: FunctionComponent = () => {
  return (
    <div className={styles.showcase03}>
      <TopSection
        heroStrapline="Kitsumon - Web3 Digital NFT MOBA gaming"
        desktopHeaderBackgroundImage="url('/top-section2@3x.png')"
      />
      <div className={styles.showcaseContent01}>
        <div className={styles.showcaseOverview}>
          Welcome to Kitsumon, where the thrilling realms of Web3 technology
          meet the heart-pounding excitement of MOBA gaming. Kitsumon is not
          just a game; it's a blockchain-based NFT adventure that transports
          players into a vibrant world of adorable creatures, strategic battles,
          and endless possibilities. Developed by third strand studios, Kitsumon
          invites players of all ages to dive into the enchanting universe of
          these unique digital assets known as "Kitsumon."
        </div>
        <b className={styles.heroStrapline}>Discover your Kitsumon</b>
        <div className={styles.showcaseOverview}>
          In Kitsumon, players embark on a quest to collect and trade their very
          own Kitsumon, each possessing distinctive traits, elements, abilities,
          and rarity levels. From the cutest companions to the mightiest
          warriors, each Kitsumon is a masterpiece waiting to be discovered.
          With hundreds of thousands of possible combinations, the excitement of
          exploration knows no bounds.
        </div>
      </div>
      <img
        className={styles.showcaseImage02Icon}
        alt=""
        src="/showcase_image_02-4.png"
      />
      <div className={styles.showcaseContent02}>
        <b className={styles.heroStrapline2}>Unleash the power of Teamwork</b>
        <div className={styles.heroStrapline3}>
          Prepare for exhilarating 5v5 MOBA battles that transcend platforms,
          allowing seamless gaming experiences on both mobile and desktop. Team
          up with friends, strategize your moves, and dive into epic battles
          that challenge your skills and teamwork. Create or join guilds,
          expanding your influence, earning passive rewards, and climbing the
          leaderboards to claim the title of the ultimate Kitsumon champion in
          your region.
        </div>
      </div>
      <img
        className={styles.showcaseImage02Icon}
        alt=""
        src="/showcase_image_02-5.png"
      />
      <div className={styles.showcaseContent02}>
        <b className={styles.heroStrapline2}>Create, Customise and Conquer</b>
        <div className={styles.heroStrapline3}>
          Dive deeper into the Kitsumon world with a range of immersive
          features. Breed unique playable hybrids, combining the traits of your
          favorite Kitsumon to create powerful allies. Personalize your gameplay
          experience with player customizations, including clothes, power-ups,
          upgrades, and exclusive battle passes. Earn in-game currency, KANDY,
          and use it to enhance your Kitsumon's abilities and appearance.
        </div>
      </div>
      <img
        className={styles.showcaseImage03Icon}
        alt=""
        src="/showcase-image-03@2x.png"
      />
      <div className={styles.showcaseContent02}>
        <b className={styles.heroStrapline2}>Web3 NFT Integration</b>
        <div className={styles.heroStrapline3}>
          <p className={styles.forCollectorsAnd}>
            For collectors and enthusiasts, Kitsumon integrates the power of
            NFTs. Owners of NFT Kitsumon can bring their unique digital assets
            into the game, unleashing their power and abilities in battles. This
            fusion of blockchain technology and gaming opens the door to a new
            era of player ownership and engagement.
          </p>
          <p className={styles.forCollectorsAnd}>&nbsp;</p>
          <p className={styles.forCollectorsAnd}>
            Kitsumon offers an array of gameplay experiences, from competitive
            online multiplayer battles to challenging offline local player modes
            featuring AI NPC enemies. Whether you're seeking thrilling PvP
            matches or solo adventures, Kitsumon provides endless entertainment
            and excitement for every player.
          </p>
          <p className={styles.forCollectorsAnd}>&nbsp;</p>
          <p className={styles.forCollectorsAnd}>
            <b>
              Join us in the Kitsumon universe, where imagination knows no
              limits and battles are won through strategy, skill, and
              collaboration. Unleash your Kitsumon, conquer the arenas, and
              become a legend in the world of Web3 gaming. Are you ready to
              embark on this extraordinary journey? Play for free, upgrade for
              more, and let the adventure begin.
            </b>
          </p>
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

export default Showcase2;
