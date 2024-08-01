import { CSSProperties, FunctionComponent, useCallback } from "react";
import { Params, useLoaderData, useNavigate } from "react-router-dom";
import Blurb, { BlurbType } from "../../components/Blurb";
import StatisticTile, {
  StatisticTileType,
} from "../../components/StatisticTile";
import ArticleFullRow from "../../components/ArticleFullRow";
import BookAMeeting from "../../components/BookAMeeting";
import styles from "./Service.module.css";
import MainLayout from "../../layouts/MainLayout";

type ServiceInfoSection = {
  title: string;
  description: string;
  industry: string;
  services: string;
  techStack: string;
  statisticTiles: StatisticTileType[];
};

type ServiceInfoTextDescriptionImage = {
  title?: string;
  description: string;
  image: string;
};

type ServiceDescriptionSection = {
  title: string;
  rows: ServiceInfoTextDescriptionImage[];
};

type ServiceProps = {
  title: string;
  description: string;
  image: string;
  headerImage: string;
  blurb: BlurbType;
  infoSection: ServiceInfoSection;
  descriptionSection: ServiceDescriptionSection;
  bottomTilesSection: (ServiceInfoTextDescriptionImage & {
    backgroundColor?: CSSProperties["backgroundColor"];
  })[];
  clientSuccessSection: ServiceInfoTextDescriptionImage;
};

const Service: FunctionComponent<{ service: string }> = ({ service }) => {
  const navigate = useNavigate();
  const {
    title,
    description,
    image,
    headerImage,
    blurb,
    infoSection,
    descriptionSection,
    bottomTilesSection,
    clientSuccessSection,
  } = useLoaderData() as ServiceProps;
  const onContactUsButtonClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);
  const bottomTileFirst =
    bottomTilesSection?.length > 0 ? bottomTilesSection[0] : null;
  const bottomTileSecond =
    bottomTilesSection?.length > 1 ? bottomTilesSection[1] : null;
  const bottomTileThird =
    bottomTilesSection?.length > 2 ? bottomTilesSection[2] : null;
  const bottomTileFirstStyling: CSSProperties = bottomTileFirst?.backgroundColor
    ? { background: bottomTileFirst.backgroundColor }
    : {};
  const bottomTileSecondStyling: CSSProperties =
    bottomTileSecond?.backgroundColor
      ? { background: bottomTileSecond.backgroundColor }
      : {};
  const bottomTileThirdStyling: CSSProperties = bottomTileThird?.backgroundColor
    ? { background: bottomTileThird.backgroundColor }
    : {};
  return (
    <MainLayout
      headerImage={headerImage}
      headerChildren={
        <div className={styles.container1}>
          <div className={styles.container2}>
            <div className={styles.margin}></div>
            <div className={styles.heroText}>
              <div className={styles.heading1margin}>
                <div className={styles.heading1}>
                  <b className={styles.softwareDevelopment1}>{title}</b>
                </div>
              </div>
              <div className={styles.container3}>
                <div className={styles.empoweringBusinessesWith}>
                  {description}
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
            <img className={styles.modeAppPicturepngIcon} alt="" src={image} />
          </div>
        </div>
      }
      children={
        <>
          <div className={styles.section1}>{blurb && <Blurb {...blurb} />}</div>
          <div className={styles.section2}>
            <div className={styles.margin1}>
              <div className={styles.overview}>
                <div className={styles.margin2}>
                  <div className={styles.container4}>
                    <div className={styles.heading2margin}>
                      <div className={styles.heading1}>
                        <b className={styles.learnHowWe}>{infoSection.title}</b>
                      </div>
                    </div>
                    <div className={styles.paragraph}>
                      <div
                        style={{ whiteSpace: "preserve" }}
                        className={styles.atThirdStrand}
                      >
                        {infoSection.description}
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.container5}>
                  <div className={styles.container6}>
                    <div className={styles.industry}>Industry</div>
                    <div className={styles.container7}>
                      <div className={styles.fintechBlockchainGame}>
                        {infoSection.industry}
                      </div>
                    </div>
                  </div>
                  <div className={styles.container6}>
                    <div className={styles.industry}>Services Provided</div>
                    <div className={styles.container7}>
                      <div className={styles.fintechBlockchainGame}>
                        {infoSection.services}
                      </div>
                    </div>
                  </div>
                  <div className={styles.container6}>
                    <div className={styles.industry}>Tech Stack</div>
                    <div className={styles.container7}>
                      <div className={styles.fintechBlockchainGame}>
                        {infoSection.techStack}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.container12}>
              {infoSection.statisticTiles.map((tile, index) => (
                <StatisticTile key={`statistic-tile-${index}`} {...tile} />
              ))}
            </div>
          </div>
          <div className={styles.section3}>
            <div className={styles.container13}>
              <div className={styles.container14}>
                <div className={styles.heading21}>
                  <b className={styles.learnHowWe}>
                    {descriptionSection.title}
                  </b>
                </div>
              </div>
              {descriptionSection.rows.map((row, index) => (
                <ArticleFullRow
                  key={`article-full-row-${index}`}
                  title={row.title}
                  desc={row.description}
                  image={row.image}
                  reverse={(index & 1) == 0}
                />
              ))}
            </div>
          </div>
          <div className={styles.section4}>
            <div className={styles.container21}>
              <div
                style={bottomTileFirstStyling}
                className={styles.articleTile}
              >
                <div className={styles.container22}>
                  <div className={styles.heading1}>
                    <b className={styles.learnHowWe}>{bottomTileFirst?.title}</b>
                  </div>
                  <div className={styles.container17}>
                    <div
                      style={{ whiteSpace: "preserve" }}
                      className={styles.ourSoftwareDevelopment}
                    >
                      {bottomTileFirst?.description}
                    </div>
                  </div>
                </div>
                <div className={styles.margin3}>
                  <img
                    className={styles.image1Icon}
                    alt=""
                    src={bottomTileFirst?.image}
                  />
                </div>
              </div>
              <div className={styles.container24}>
                <div
                  style={bottomTileSecondStyling}
                  className={styles.articleVertical}
                >
                  <div className={styles.container25}>
                    <div className={styles.heading1}>
                      <div className={styles.ourSoftwareDevelopment}>
                        <p
                          style={{ whiteSpace: "preserve" }}
                          className={styles.ourApproachBegins}
                        >
                          {bottomTileSecond?.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.container26}>
                    <img
                      className={styles.modeApppngIcon}
                      alt=""
                      src={bottomTileSecond?.image}
                    />
                  </div>
                </div>
                <div
                  style={bottomTileThirdStyling}
                  className={styles.articleVertical1}
                >
                  <div className={styles.container25}>
                    <div className={styles.heading1}>
                      <div
                        style={{ whiteSpace: "preserve" }}
                        className={styles.ourSoftwareDevelopment}
                      >
                        {bottomTileThird?.description}
                      </div>
                    </div>
                  </div>
                  <div className={styles.container26}>
                    <img
                      className={styles.modeApppngIcon}
                      alt=""
                      src={bottomTileThird?.image}
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
                  <b className={styles.learnHowWe}>
                    {clientSuccessSection.title}
                  </b>
                </div>
                <div className={styles.container17}>
                  <div className={styles.ourSoftwareDevelopment}>
                    <p
                      style={{ whiteSpace: "preserve" }}
                      className={styles.ourApproachBegins}
                    >
                      {clientSuccessSection.description}
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.margin3}>
                <img
                  className={styles.image1Icon}
                  alt=""
                  src={clientSuccessSection.image}
                />
              </div>
            </div>
          </div>
          <div className={styles.section4}>
            <BookAMeeting />
          </div>
        </>
      }
    ></MainLayout>
  );
};

export const component = Service;
export const Component = component;

export const entry = "src/pages/services/[service].tsx";

export async function loader({ params }: { params: Params<string> }) {
  const fs = await import("node:fs");
  const page = params.service;
  const cwd = process.cwd();

  const codePagesDir = `${cwd}/services/`;
  const file = `${codePagesDir}${page}.json`;
  const jsonData = JSON.parse(fs.readFileSync(file, "utf-8")) as ServiceProps;
  return jsonData;
}

export function getStaticPaths() {
  const codePages = import.meta.glob("/services/*.json");
  const paths = Object.keys(codePages).map(
    (path) => path.match(/\/services\/(.*)\.json$/)?.[1] ?? ""
  );
  return paths;
}
