import { FunctionComponent, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Showcase04Container from "./Showcase04Container";
import styles from "./CaseStudies.module.css";

export type CaseStudiesType = {
  className?: string;
};

const CaseStudies: FunctionComponent<CaseStudiesType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onShowcase04ContainerClick = useCallback(() => {
    navigate("/showcase-03");
  }, [navigate]);

  const onShowcase01ContainerClick = useCallback(() => {
    navigate("/showcase-02");
  }, [navigate]);

  const onLearnMoreTextClick = useCallback(() => {
    navigate("/showcase-01");
  }, [navigate]);

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
    <div className={[styles.caseStudies, className].join(" ")}>
      <b className={styles.servicesTitle}>Spotlight</b>
      <Showcase04Container
        tags={["Product design", "Web3", "NFT Technology"]}
        title="Kitsumon Web3 MOBA Gaming"
        image="/image.png"
        onShowcase04ContainerClick={onShowcase04ContainerClick}
      />
      <Showcase04Container
        title="All links custom website platform"
        tags={["Product design", "Web3", "NFT Technology"]}
        image="/image-1.png"
        propMargin="unset"
        onShowcase04ContainerClick={onShowcase01ContainerClick}
      />
      <Showcase04Container
        title="MySitesLive"
        tags={["Product design", "Web3", "NFT Technology"]}
        image="/image-2.png"
        propMargin="0"
        onShowcase04ContainerClick={onLearnMoreTextClick}
      />

      <Showcase04Container
        title="Web3 Gaming NFT Guild, Marketplace & UI"
        tags={["Product design", "Web3", "NFT Technology"]}
        image="/image-3.png"
        propMargin="0"
        onShowcase04ContainerClick={onShowcase04ContainerClick}
      />
     
    </div>
  );
};

export default CaseStudies;
