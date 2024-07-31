import { FunctionComponent } from "react";
import styles from "./BookAMeeting.module.css";

export type BookAMeetingType = {
  className?: string;
};

const BookAMeeting: FunctionComponent<BookAMeetingType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.bookAMeetingContainer, className].join(" ")}>
      <div className={styles.meetingText}>
        <div className={styles.meetingTextTitle}>
          Book a conversation and in 30 minutes we’ll
        </div>
        <div className={styles.meetingText1}>
          <img
            className={styles.meetingText1Icon}
            alt=""
            src="/meeting-text-1-icon.svg"
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
          />
          <div className={styles.meetingText11}>
            Connect you with a bespoke software development specialist and
            someone with domain level expertise
          </div>
        </div>
      </div>
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
        <div className={styles.cfMessageField}>
          <input
            className={styles.firstNameField1}
            placeholder="Message..."
            type="text"
          />
        </div>
        <button className={styles.submitButtonsubmitButtonDe}>
          <b className={styles.submitButtonText}>Submit</b>
        </button>
        <div className={styles.cfFormContainer}>
          <span>{`By submitting this form, you agree to the Third Strand Studio `}</span>
          <span className={styles.privacyPolicy}>Privacy Policy</span>
          <span>.</span>
        </div>
      </div>
    </div>
  );
};

export default BookAMeeting;
