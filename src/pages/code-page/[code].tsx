import { FunctionComponent } from "react";
import NumberedTextItem, {
  NumberedTextItemType,
} from "../../components/NumberedTextItem";
import CheckboxWithText, {
  CheckboxWithTextType,
} from "../../components/CheckboxWithText";
import BookAMeeting from "../../components/BookAMeeting";
import styles from "./CodePage.module.css";
import MainLayoutWithContact from "../../layouts/MainLayoutWithContact";
import { Params, useLoaderData } from "react-router-dom";

export type CodePageTitleDesc = {
  title: string;
  description: string;
};

export type QuestionAnswerSection = {
  leftTitle: string;
  leftDesc?: string;
  leftContent: NumberedTextItemType[];
  rightTitle: string;
  rightDesc: string;
  rightContent: CheckboxWithTextType[];
  bottomDividerImage: string;
};

export type ArticleSection = {
  title: string;
  content: CodePageTitleDesc[];
  bottomDividerImage: string;
};

export type MainContentSection = {
  headerBackgroundImage: string;
} & CodePageTitleDesc;

type CodePageProps = {
  mainContent: MainContentSection;
  articleSections: ArticleSection[];
  sections: QuestionAnswerSection[];
};

const CodePage: FunctionComponent = () => {
  const { mainContent, articleSections, sections } =
    useLoaderData() as CodePageProps;

  const getArticleSection = (articleSection: ArticleSection, index: number) => {
    return (
      <div key={`article-${index}`} className={styles.gloalWorkspace}>
        <b className={styles.cfTitle}>{articleSection.title}</b>
        <div className={styles.workspaceContainer}>
          <div className={styles.workspaces}>
            <div className={styles.workspace01}>
              <div className={styles.divider} />
            </div>
            {articleSection.content.map((content, i2) => (
              <div
                key={`article-${index}-${i2}`}
                className={styles.titleDescription}
              >
                <div className={styles.title}>{content.title}</div>
                <div className={styles.description}>{content.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const getSection = (section: QuestionAnswerSection, index: number) => {
    return (
      <div className={styles.outerSection} key={`outer-sec-${index}`}>
        <div key={`section-${index}`} className={styles.servicesParent}>
          <div className={styles.services}>
            <div className={styles.servicesTitle1}>{section.leftTitle}</div>
            {section.leftDesc && (
              <div className={styles.specialityTimelinesLeft}>
                {section.leftDesc}
              </div>
            )}
            {section.leftContent.map((a, i) => (
              <NumberedTextItem
                key={`sectionLeftContent-${index}-${i}`}
                numberText={a.numberText}
                text={a.text}
              />
            ))}

            {/* <div className={styles.softwareDevelopmentContainer}>
              <div className={styles.softwareDevelopment}>
                <div className={styles.learnMore}>
                  <div className={styles.learnMore1}>{`Learn more >`}</div>
                </div>
              </div>
            </div> */}
          </div>
          <div className={styles.specialityExamplesRow11}>
            <b className={styles.cfTitle}>{section.rightTitle}</b>
            <div className={styles.description3}>{section.rightDesc}</div>
            <div className={styles.heroStraplineWrapper}>
              <div className={styles.specialityExample1Group}>
                {section.rightContent.map((a, i) => (
                  <CheckboxWithText
                    key={`sectionRightContent-${index}-${i}`}
                    className={styles.checkboxWithText}
                    text={a.text}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div key={`section-divider-${index}`} className={styles.divider3} />
      </div>
    );
  };

  return (
    <MainLayoutWithContact
      strapLineData={{
        title: mainContent.title,
        description: mainContent.description,
        descriptionClassName: styles.specialityBody
      }}
      headerImage={mainContent.headerBackgroundImage}      
    >
      <div className={styles.content}>
        {articleSections.map((articleSection, index) =>
          getArticleSection(articleSection, index)
        )}
        <div className={styles.divider1} />
        {sections.map((section, index) => getSection(section, index))}
        <BookAMeeting />
      </div>
    </MainLayoutWithContact>
  );
};

export const Component = CodePage;

export const entry = "src/pages/code-page/[code].tsx";

export async function loader({ params }: { params: Params<string> }) {
  const fs = await import("node:fs");
  const page = params.code;
  const cwd = process.cwd();

  const codePagesDir = `${cwd}/code-pages/`;
  const file = `${codePagesDir}${page}.json`;
  const jsonData = JSON.parse(fs.readFileSync(file, "utf-8")) as CodePageProps;
  return jsonData;
}

export function getStaticPaths() {
  const codePages = import.meta.glob("/code-pages/*.json");
  const paths = Object.keys(codePages).map(
    (path) => "/code/"+path.match(/\/code-pages\/(.*)\.json$/)?.[1]
  );
  return paths;
}
