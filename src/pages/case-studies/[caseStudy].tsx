import { FunctionComponent, useEffect } from "react";
import Header from "../../components/Header";
import Tag, { TagType } from "../../components/Tag";
import Blurb, { BlurbType } from "../../components/Blurb";
import BookAMeeting from "../../components/BookAMeeting";
import Footer from "../../components/Footer";
import styles from "./Showcase.module.css";
import MainLayoutWithContact from "../../layouts/MainLayoutWithContact";
import { Params, useLoaderData } from "react-router-dom";

type ShowcaseSection = {
  title?: string;
  description?: string;
  image?: string;
};

type ShowcaseProps = {
  title: string;
  description?: string;
  blurb?: BlurbType;
  tags?: TagType[];
  sections: ShowcaseSection[];
  headerImage: string;
};

const Showcase: FunctionComponent = () => {
  const { title, description, headerImage, blurb, tags, sections } =
    useLoaderData() as ShowcaseProps;
  return (
    <MainLayoutWithContact
      strapLineData={{
        title: title,
        description: description,
      }}
      headerImage={headerImage}
    >
      <div className={styles.mainContainer}>
        <div className={styles.tags}>
          {tags?.map((tag, index) => (
            <Tag key={`tag-${index}`} {...tag} />
          ))}
        </div>
        {blurb && <Blurb {...blurb} />}
        {sections &&
          sections.map((section, index) => (
            <>
              <div
                key={`section-${index}`}
                className={styles.showcaseContent02}
              >
                {section.title && (
                  <b className={styles.heroStrapline4}>{section.title}</b>
                )}
                {section.description && (
                  <div className={styles.heroStrapline5}>
                    {section.description}
                  </div>
                )}
              </div>
              {section.image && (
                <img
                  key={`section-img-${index}`}
                  className={styles.showcaseImage02Icon}
                  alt=""
                  src={section.image}
                />
              )}
            </>
          ))}

        <BookAMeeting />
      </div>
    </MainLayoutWithContact>
  );
};

export const component = Showcase;
export const Component = component;

export const entry = "src/pages/case-studies/[caseStudy].tsx";

export async function loader({ params }: { params: Params<string> }) {
  const fs = await import("node:fs");
  const path = await import("node:path");
  const page = params["caseStudy"];
  const cwd = process.cwd();

  const codePagesDir = `${cwd}/case-studies/`;
  const file = `${codePagesDir}${page}.json`;
  const jsonData = JSON.parse(fs.readFileSync(file, "utf-8")) as ShowcaseProps;
  return jsonData;
}

export function getStaticPaths() {
  // Change the glob pattern to match JSON files in public/code-pages
  const codePages = import.meta.glob("/case-studies/*.json");
  // Extract the file names without the .json extension
  const paths = Object.keys(codePages).map(
    (path) => path.match(/\/case-studies\/(.*)\.json$/)?.[1] ?? ""
  );
  return paths;
}
