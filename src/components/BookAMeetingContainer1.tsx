import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./BookAMeetingContainer1.module.css";

export type BookAMeetingContainer1Type = {
  className?: string;
  showMeetingText?: boolean;

  /** Style props */
  meetingTextPadding?: CSSProperties["padding"];
  meetingTextWidth?: CSSProperties["width"];
  meetingTextFlex?: CSSProperties["flex"];
  meetingTextTitlePadding?: CSSProperties["padding"];
  meetingTextTitleFlex?: CSSProperties["flex"];
  meetingTextTitleWidth?: CSSProperties["width"];
  meetingText1Width?: CSSProperties["width"];
  meetingText1Height?: CSSProperties["height"];
  meetingText2Width?: CSSProperties["width"];
  meetingText2Height?: CSSProperties["height"];
  meetingText3Width?: CSSProperties["width"];
  meetingText3Height?: CSSProperties["height"];
  cFMessageFieldHeight?: CSSProperties["height"];
  bySubmittingThisHeight?: CSSProperties["height"];
};

const BookAMeetingContainer1: FunctionComponent<BookAMeetingContainer1Type> = ({
  className = "",
  showMeetingText,
  meetingTextPadding,
  meetingTextWidth,
  meetingTextFlex,
  meetingTextTitlePadding,
  meetingTextTitleFlex,
  meetingTextTitleWidth,
  meetingText1Width,
  meetingText1Height,
  meetingText2Width,
  meetingText2Height,
  meetingText3Width,
  meetingText3Height,
  cFMessageFieldHeight,
  bySubmittingThisHeight,
}) => {
  const bookAMeetingContainerStyle: CSSProperties = useMemo(() => {
    return {
      padding: meetingTextPadding,
      width: meetingTextWidth,
      flex: meetingTextFlex,
    };
  }, [meetingTextPadding, meetingTextWidth, meetingTextFlex]);

  const meetingTextStyle: CSSProperties = useMemo(() => {
    return {
      padding: meetingTextTitlePadding,
      flex: meetingTextTitleFlex,
      width: meetingTextTitleWidth,
    };
  }, [meetingTextTitlePadding, meetingTextTitleFlex, meetingTextTitleWidth]);

  const meetingText1IconStyle: CSSProperties = useMemo(() => {
    return {
      width: meetingText1Width,
      height: meetingText1Height,
    };
  }, [meetingText1Width, meetingText1Height]);

  const meetingText2IconStyle: CSSProperties = useMemo(() => {
    return {
      width: meetingText2Width,
      height: meetingText2Height,
    };
  }, [meetingText2Width, meetingText2Height]);

  const meetingText3IconStyle: CSSProperties = useMemo(() => {
    return {
      width: meetingText3Width,
      height: meetingText3Height,
    };
  }, [meetingText3Width, meetingText3Height]);

  const cFMessageFieldStyle: CSSProperties = useMemo(() => {
    return {
      height: cFMessageFieldHeight,
    };
  }, [cFMessageFieldHeight]);

  const cFFormContainerStyle: CSSProperties = useMemo(() => {
    return {
      height: bySubmittingThisHeight,
    };
  }, [bySubmittingThisHeight]);

  return (
    <div
      className={[styles.bookAMeetingContainer, className].join(" ")}
      style={bookAMeetingContainerStyle}
    >
      {showMeetingText && (
        <div className={styles.meetingText} style={meetingTextStyle}>
          <div className={styles.meetingTextTitle}>
            Book a conversation and in 30 minutes we’ll
          </div>
          <div className={styles.meetingText1}>
            <img
              className={styles.meetingText1Icon}
              alt=""
              src="/meeting-text-1-icon.svg"
              style={meetingText1IconStyle}
            />
            <div className={styles.meetingText11}>
              Give you clarity so you know what good can look like
            </div>
          </div>
          <div className={styles.meetingText1}>
            <img
              className={styles.meetingText2Icon}
              alt=""
              src="/meeting-text-2-icon.svg"
              style={meetingText2IconStyle}
            />
            <div className={styles.meetingText11}>
              Show you your next steps with a roadmap to achieve your business
              goals
            </div>
          </div>
          <div className={styles.meetingText1}>
            <img
              className={styles.meetingText1Icon}
              alt=""
              src="/meeting-text-3-icon.svg"
              style={meetingText3IconStyle}
            />
            <div className={styles.meetingText11}>
              Connect you with a bespoke software development specialist and
              someone with domain level expertise
            </div>
          </div>
        </div>
      )}
      <div className={styles.contactForm}>
        <b className={styles.cfTitle}>Speak to us about your goals</b>
        <div className={styles.cfNameFields}>
          <div className={styles.firstNameField}>
            <input
              className={styles.firstNameField1}
              placeholder="First Name*"
              type="text"
            />
          </div>
          <div className={styles.firstNameField}>
            <input
              className={styles.firstNameField1}
              placeholder="Last Name*"
              type="text"
            />
          </div>
        </div>
        <div className={styles.cfEmailField}>
          <input
            className={styles.firstNameField1}
            placeholder="Business Email*"
            type="text"
          />
        </div>
        <div className={styles.cfMessageField} style={cFMessageFieldStyle}>
          <input
            className={styles.firstNameField1}
            placeholder="Message..."
            type="text"
          />
        </div>
        <button className={styles.submitButtonsubmitButtonDe}>
          <b className={styles.submitButtonText}>Submit</b>
        </button>
        <div className={styles.cfFormContainer} style={cFFormContainerStyle}>
          <span>{`By submitting this form, you agree to the Third Strand Studio `}</span>
          <span className={styles.privacyPolicy}>Privacy Policy</span>
          <span>.</span>
        </div>
      </div>
    </div>
  );
};

export default BookAMeetingContainer1;
