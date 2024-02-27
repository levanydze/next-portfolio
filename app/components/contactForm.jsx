"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./contactForm.module.css";

export default function ContactForm() {
  const form = useRef();
  const [emailSent, setEmailSent] = useState(false);
  const HandleEmailSent = () => {
    setEmailSent(true);
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_u6gjg6s",
        "template_jsv5qfx",
        form.current,
        "y8nREYl_1OCsl1rBw"
      )
      .then(() => {
        HandleEmailSent();
      });
  };

  return (
    <>
      <div className={styles.formHead}>
        <h2>Contact Us</h2>
        <h3>LET'S GET IN TOUCH</h3>
        <p className="twoLines"></p>
      </div>
      <form
        className={`${styles.form} ${emailSent === true ? styles.none : ""}`}
        ref={form}
        onSubmit={sendEmail}
      >
        <div className={styles.smallInputs}>
          <input
            className={`${styles.input} ${styles.miniInput}`}
            type="text"
            name="user_name"
            placeholder="Enter your full name"
          />
          <input
            className={`${styles.input} ${styles.miniInput}`}
            type="email"
            name="user_email"
            placeholder="Email"
          />
        </div>

        <textarea
          className={`${styles.textArea} ${styles.input}`}
          name="message"
          placeholder="Your message here"
        />
        <input
          className={`button1 ${styles.buttonSend}`}
          type="submit"
          value="Send"
        />
      </form>
      <div className={emailSent ? styles.formSent : styles.hide}>
        <h6> Thank you for your message</h6>
      </div>
    </>
  );
}
