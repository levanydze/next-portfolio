"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

//import styles
import styles from "./contactForm.module.css";

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_u6gjg6s",
      "template_jsv5qfx",
      form.current,
      "y8nREYl_1OCsl1rBw"
    );
  };

  return (
    <>
      <h2 className="headText">Contact</h2>
      <div className={styles.wrapper}>
        <form className={styles.form} ref={form} onSubmit={sendEmail}>
          <input
            className={styles.input}
            type="text"
            name="user_name"
            placeholder="Name"
          />
          <input
            className={styles.input}
            type="email"
            name="user_email"
            placeholder="Email"
          />
          <textarea
            className={`${styles.textArea} ${styles.input}`}
            name="message"
            placeholder="Your message here"
          />
          <input className={styles.button1} type="submit" value="Send" />
        </form>
      </div>
    </>
  );
};

export default ContactForm;
