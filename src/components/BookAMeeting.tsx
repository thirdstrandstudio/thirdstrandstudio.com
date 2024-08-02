import { FunctionComponent, useState } from "react";
import styles from "./BookAMeeting.module.css";

export type BookAMeetingType = {
  className?: string;
};

const BookAMeeting: FunctionComponent<BookAMeetingType> = ({
  className = "",
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("Name_First", firstName);
    formData.append("Name_Last", lastName);
    formData.append("Email", email);
    formData.append("MultiLine", message);
    formData.append("zf_referrer_name", "");
    formData.append("zf_redirect_url", "");
    formData.append("zc_gad", "");
    fetch(
      "https://forms.zohopublic.eu/digitaldnastudios361/form/ThirdStrandStudioContactForm/formperma/4kSCS__NtzTgkIB92PZEdc_u8VfHSGoT_TUR8zpu6xQ/htmlRecords/submit",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => response.text())
      .then((result) => {
        console.log("Success:", result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

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
      <form target="_blank" action='https://forms.zohopublic.eu/digitaldnastudios361/form/ThirdStrandStudioContactForm/formperma/4kSCS__NtzTgkIB92PZEdc_u8VfHSGoT_TUR8zpu6xQ/htmlRecords/submit' name='form' method='POST' acceptCharset='UTF-8' encType='multipart/form-data' id='form' className={styles.contactForm}>
        <input type="hidden" name="zf_referrer_name" value="" />
        <input type="hidden" name="zf_redirect_url" value="" />
        <input type="hidden" name="zc_gad" value="" />
        <b className={styles.cfTitle}>Speak to us about your goals</b>
        <div className={styles.cfNameFields}>
          <div className={styles.firstNameField}>
            <input
              name="Name_First"
              className={styles.firstNameField1}
              placeholder="First Name*"
              type="text"
              value={firstName}
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className={styles.firstNameField}>
            <input
              className={styles.firstNameField1}
              name="Name_Last"
              placeholder="Last Name*"
              type="text"
              value={lastName}
              required
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.cfEmailField}>
          <input
            className={styles.firstNameField1}
            placeholder="Business Email*"
            name="Email"
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.cfMessageField}>
          <input
            className={styles.firstNameField1}
            placeholder="Message..."
            name="MultiLine"
            type="text"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button type="submit" className={styles.submitButtonsubmitButtonDe}>
          <b className={styles.submitButtonText}>Submit</b>
        </button>
        <div className={styles.cfFormContainer}>
          <span>{`By submitting this form, you agree to the Third Strand Studio `}</span>
          <span className={styles.privacyPolicy}>Privacy Policy</span>
          <span>.</span>
        </div>
      </form>
    </div>
  );
};

export default BookAMeeting;
