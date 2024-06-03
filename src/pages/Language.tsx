import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import BookAMeetingContainer1 from "../components/BookAMeetingContainer1";
import Footer from "../components/Footer";
import styles from "./Language.module.css";
import DesktopHeader from "../components/DesktopHeader1";

const Language: FunctionComponent = () => {
  return (
    <div className={styles.language01}>
      <div className={styles.languageTopSection}>
        <DesktopHeader></DesktopHeader>
        <div className={styles.languageTitle}>
          <div className={styles.gradientDivider} />
          <img
            className={styles.languageIcon}
            alt=""
            src="/language-icon.svg"
          />
          <div className={styles.languageTitle1}>Hire NodeJS Developers</div>
        </div>
      </div>
      <div className={styles.languageContent01}>
        <div
          className={styles.specialityBody}
        >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis felis placerat, faucibus ante a, lobortis eros. Quisque vulputate nec ligula id commodo. `}</div>
        <div className={styles.languageChecklist}>
          <div className={styles.specialityExamplesRow1}>
            <div className={styles.specialityExample1}>
              <div className={styles.checkbox}>
                <div className={styles.checkboxChild} />
                <img
                  className={styles.checkboxItem}
                  alt=""
                  src="/vector-1.svg"
                />
              </div>
              <div className={styles.example1Title}>
                Complex single-page apps (SPAs)
              </div>
            </div>
            <div className={styles.specialityExample1}>
              <div className={styles.checkbox}>
                <div className={styles.checkboxChild} />
                <img
                  className={styles.checkboxItem}
                  alt=""
                  src="/vector-1.svg"
                />
              </div>
              <div className={styles.example1Title}>Real-time apps (RTAs)</div>
            </div>
            <div className={styles.specialityExample1}>
              <div className={styles.checkbox}>
                <div className={styles.checkboxChild} />
                <img
                  className={styles.checkboxItem}
                  alt=""
                  src="/vector-1.svg"
                />
              </div>
              <div className={styles.example1Title}>Browser games</div>
            </div>
            <div className={styles.specialityExample1}>
              <div className={styles.checkbox}>
                <div className={styles.checkboxChild} />
                <img
                  className={styles.checkboxItem}
                  alt=""
                  src="/vector-1.svg"
                />
              </div>
              <div className={styles.example1Title}>Data streaming apps</div>
            </div>
          </div>
          <div className={styles.specialityExamplesRow1}>
            <div className={styles.specialityExample1}>
              <div className={styles.checkbox}>
                <div className={styles.checkboxChild} />
                <img
                  className={styles.checkboxItem}
                  alt=""
                  src="/vector-1.svg"
                />
              </div>
              <div className={styles.example1Title}>Command-line tools</div>
            </div>
            <div className={styles.specialityExample1}>
              <div className={styles.checkbox}>
                <div className={styles.checkboxChild} />
                <img
                  className={styles.checkboxItem}
                  alt=""
                  src="/vector-1.svg"
                />
              </div>
              <div className={styles.example1Title}>REST APIs</div>
            </div>
            <div className={styles.specialityExample1}>
              <div className={styles.checkbox}>
                <div className={styles.checkboxChild} />
                <img
                  className={styles.checkboxItem}
                  alt=""
                  src="/vector-1.svg"
                />
              </div>
              <div className={styles.example1Title}>Server-side web apps</div>
            </div>
            <div className={styles.specialityExample1}>
              <div className={styles.checkbox}>
                <div className={styles.checkboxChild} />
                <img
                  className={styles.checkboxItem}
                  alt=""
                  src="/vector-1.svg"
                />
              </div>
              <div className={styles.example1Title}>Hardware programming</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.whyUseSpecialityContainer}>
        <div className={styles.whyUseSpecialityLeftConten}>
          <div className={styles.whyUseSpeciality}>Why use Node.JS?</div>
          <div className={styles.whyUseSpeciality1}>
            <div className={styles.whyUseSpeciality1Icon}>
              <div className={styles.whyUseSpeciality1IconChild} />
              <b className={styles.b}>1</b>
            </div>
            <div className={styles.whyUseSpeciality2}>
              A Node.js developer is the right choice if you want to create a
              customized, high-performance, reliable, and scalable solution.
            </div>
          </div>
          <div className={styles.whyUseSpeciality21}>
            <div className={styles.whyUseSpeciality1Icon}>
              <div className={styles.whyUseSpeciality1IconChild} />
              <b className={styles.b}>2</b>
            </div>
            <div className={styles.whyUseSpeciality2}>
              A Node.js developer can also be hired to update your existing
              JavaScript project.
            </div>
          </div>
          <div className={styles.whyUseSpeciality21}>
            <div className={styles.whyUseSpeciality1Icon}>
              <div className={styles.whyUseSpeciality1IconChild} />
              <b className={styles.b}>3</b>
            </div>
            <div className={styles.whyUseSpeciality2}>
              You can also get an expert opinion and consultation on your
              Node.js app development from a Node.js developer.
            </div>
          </div>
        </div>
        <div className={styles.companiesUsingSpeciality}>
          <div className={styles.companiesUsingSpeciality1}>
            Top companies using Node.js in their projects
          </div>
          <div className={styles.companiesUsingSpeciality2}>
            Node.js has proved itself as a reliable and convienent tool used by
            the worlds most established companies.
          </div>
          <div className={styles.companiesRow1Parent}>
            <div className={styles.companiesRow1}>
              <div className={styles.specialityExample1}>
                <div className={styles.checkbox}>
                  <div className={styles.checkboxChild13} />
                  <img
                    className={styles.checkboxItem}
                    alt=""
                    src="/vector-11.svg"
                  />
                </div>
                <div className={styles.company1Name}>IBM</div>
              </div>
              <div className={styles.specialityExample1}>
                <div className={styles.checkbox}>
                  <div className={styles.checkboxChild13} />
                  <img
                    className={styles.checkboxItem}
                    alt=""
                    src="/vector-11.svg"
                  />
                </div>
                <div className={styles.company1Name}>PayPal</div>
              </div>
              <div className={styles.specialityExample1}>
                <div className={styles.checkbox}>
                  <div className={styles.checkboxChild13} />
                  <img
                    className={styles.checkboxItem}
                    alt=""
                    src="/vector-11.svg"
                  />
                </div>
                <div className={styles.company1Name}>Yahoo</div>
              </div>
              <div className={styles.specialityExample1}>
                <div className={styles.checkbox}>
                  <div className={styles.checkboxChild13} />
                  <img
                    className={styles.checkboxItem}
                    alt=""
                    src="/vector-11.svg"
                  />
                </div>
                <div className={styles.company1Name}>Microsoft</div>
              </div>
            </div>
            <div className={styles.companiesRow1}>
              <div className={styles.specialityExample1}>
                <div className={styles.checkbox}>
                  <div className={styles.checkboxChild13} />
                  <img
                    className={styles.checkboxItem}
                    alt=""
                    src="/vector-11.svg"
                  />
                </div>
                <div className={styles.company1Name}>Walmart</div>
              </div>
              <div className={styles.specialityExample1}>
                <div className={styles.checkbox}>
                  <div className={styles.checkboxChild13} />
                  <img
                    className={styles.checkboxItem}
                    alt=""
                    src="/vector-11.svg"
                  />
                </div>
                <div className={styles.company1Name}>Ebay</div>
              </div>
              <div className={styles.specialityExample1}>
                <div className={styles.checkbox}>
                  <div className={styles.checkboxChild13} />
                  <img
                    className={styles.checkboxItem}
                    alt=""
                    src="/vector-11.svg"
                  />
                </div>
                <div className={styles.company1Name}>NASA</div>
              </div>
              <div className={styles.specialityExample1}>
                <div className={styles.checkbox}>
                  <div className={styles.checkboxChild13} />
                  <img
                    className={styles.checkboxItem}
                    alt=""
                    src="/vector-11.svg"
                  />
                </div>
                <div className={styles.company1Name}>Netflix</div>
              </div>
            </div>
            <div className={styles.companiesRow1}>
              <div className={styles.specialityExample1}>
                <div className={styles.checkbox}>
                  <div className={styles.checkboxChild13} />
                  <img
                    className={styles.checkboxItem}
                    alt=""
                    src="/vector-11.svg"
                  />
                </div>
                <div className={styles.example1Title}>Mozilla</div>
              </div>
              <div className={styles.specialityExample1}>
                <div className={styles.checkbox}>
                  <div className={styles.checkboxChild13} />
                  <img
                    className={styles.checkboxItem}
                    alt=""
                    src="/vector-11.svg"
                  />
                </div>
                <div className={styles.example1Title}>Uber</div>
              </div>
              <div className={styles.specialityExample1}>
                <div className={styles.checkbox}>
                  <div className={styles.checkboxChild13} />
                  <img
                    className={styles.checkboxItem}
                    alt=""
                    src="/vector-11.svg"
                  />
                </div>
                <div className={styles.example1Title}>Many more...</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.advantagesOfSpecialityConta}>
        <div className={styles.specialityBody}>
          <span>{`Advantages of using `}</span>
          <b className={styles.nodejs}>Node.js</b>
        </div>
        <div className={styles.advantagesRow1}>
          <div className={styles.scalability}>
            <b className={styles.specialityBody}>Scalability</b>
            <div className={styles.nodejsAppsCan}>
              Node.js apps can be pretty easily scaled. Instead of building a
              single main core, developers create multiple modules that are
              easily integrated, and as a result, the entire software
              development process is significantly simplified.
            </div>
          </div>
          <div className={styles.scalability}>
            <b className={styles.specialityBody}>Substantial customization</b>
            <div className={styles.builtInApisAnd}>
              Built-in APIs and integration with various useful tools like
              Babel, Jest, Log.io, Migrate, PM2, Restify, Express, Nest,
              Fastify, Hapi, Meteor, Koa, etc. provide indeed amazing
              opportunities for Node.js customization and extension.
            </div>
          </div>
          <div className={styles.scalability}>
            <b className={styles.specialityBody}>Availability</b>
            <div className={styles.nodejsIsA}>
              Node.js is a completely free environment. All tools and libs are
              freely available.
            </div>
          </div>
          <div className={styles.selfSustainability}>
            <b className={styles.specialityBody}>Self-sustainability</b>
            <div className={styles.nodejsAppsCan}>
              Node.js offers a lot of standard modules. Node.js package manager,
              in its turn, provides different libs and useful tools.
            </div>
          </div>
          <div className={styles.scalability}>
            <b className={styles.specialityBody}>Universality</b>
            <div className={styles.nodejsAppsCan}>
              Using Node.js, developers can create the most various types of
              software, among which are cloud and IoT solutions, web apps,
              mobile apps, and desktop apps for different operational systems -
              Mac, Windows, and Linux.
            </div>
          </div>
          <div className={styles.scalability}>
            <b className={styles.specialityBody}>Simplicity</b>
            <div className={styles.nodejsAppsCan}>
              Node.js is indeed simple and can be quickly mastered by people who
              are well-versed in JavaScript.
            </div>
          </div>
          <div className={styles.scalability}>
            <b className={styles.specialityBody}>
              High productivity and performance
            </b>
            <div className={styles.nodejsAppsCan}>
              Node.js is highly appreciated for its extremely high performance,
              fast loading, and responsiveness provided by the V8 JavaScript
              engine and module caching.
            </div>
          </div>
          <div className={styles.selfSustainability}>
            <b className={styles.specialityBody}>Community Support</b>
            <div className={styles.nodejsAppsCan}>
              A great number of brilliant developers compose a global Node.js
              community, make a significant contribution to its development, and
              support each other by sharing valuable insights and experience.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.letsWorkTogether}>
        <div className={styles.letsWorkTogether1}>
          <div className={styles.letsWorkTogether2}>Let’s work together</div>
        </div>
      </div>
      <div className={styles.whyUseSpecialityContainer1}>
        <div className={styles.whyUseSpecialityLeftConten1}>
          <div className={styles.whyUseSpeciality5}>
            How much time does it take to develop a Node.js Project?
          </div>
          <div className={styles.specialityBody}>
            There are no specific time limits for Node.js project development.
            In fact, everything depends on the scope, requirements, and type of
            the developed solution. However, according to our experience, the
            average turnaround time is:
          </div>
          <div className={styles.whyUseSpeciality11}>
            <div className={styles.checkbox}>
              <div className={styles.checkboxChild} />
              <img
                className={styles.checkboxItem}
                alt=""
                src="/vector-12.svg"
              />
            </div>
            <div className={styles.example1Title}>
              4-6 months for customized software development
            </div>
          </div>
          <div className={styles.whyUseSpeciality11}>
            <div className={styles.checkbox}>
              <div className={styles.checkboxChild} />
              <img
                className={styles.checkboxItem}
                alt=""
                src="/vector-12.svg"
              />
            </div>
            <div className={styles.example1Title}>
              2-5 months for web application development
            </div>
          </div>
          <div className={styles.whyUseSpeciality11}>
            <div className={styles.checkbox}>
              <div className={styles.checkboxChild} />
              <img
                className={styles.checkboxItem}
                alt=""
                src="/vector-12.svg"
              />
            </div>
            <div className={styles.example1Title}>
              3-6 months for mobile application development
            </div>
          </div>
        </div>
        <div className={styles.companiesUsingSpeciality3}>
          <div className={styles.whyUseSpeciality5}>
            Our developers Node.js expertise.
          </div>
          <div
            className={styles.specialityBody}
          >{`We specialise in many forms of Node.js production. `}</div>
          <div className={styles.companiesRow11}>
            <div className={styles.specialityExample1}>
              <div className={styles.checkbox}>
                <div className={styles.checkboxChild13} />
                <img
                  className={styles.checkboxItem}
                  alt=""
                  src="/vector-11.svg"
                />
              </div>
              <div className={styles.company1Name}>
                Complex single-page apps (SPAs)
              </div>
            </div>
            <div className={styles.specialityExample1}>
              <div className={styles.checkbox}>
                <div className={styles.checkboxChild13} />
                <img
                  className={styles.checkboxItem}
                  alt=""
                  src="/vector-11.svg"
                />
              </div>
              <div className={styles.company1Name}>Browser games</div>
            </div>
            <div className={styles.specialityExample1}>
              <div className={styles.checkbox}>
                <div className={styles.checkboxChild13} />
                <img
                  className={styles.checkboxItem}
                  alt=""
                  src="/vector-11.svg"
                />
              </div>
              <div className={styles.company1Name}>Command-line tools</div>
            </div>
            <div className={styles.specialityExample1}>
              <div className={styles.checkbox}>
                <div className={styles.checkboxChild13} />
                <img
                  className={styles.checkboxItem}
                  alt=""
                  src="/vector-11.svg"
                />
              </div>
              <div className={styles.company1Name}>Server-side web apps</div>
            </div>
            <div className={styles.specialityExample1}>
              <div className={styles.checkbox}>
                <div className={styles.checkboxChild13} />
                <img
                  className={styles.checkboxItem}
                  alt=""
                  src="/vector-11.svg"
                />
              </div>
              <div className={styles.company1Name}>Many other disciplines</div>
            </div>
          </div>
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

export default Language;
