"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser"; //  npm install --save @emailjs/browser

import styles from "./ReservationContactForm.module.css";
import { useTranslations } from "next-intl";

interface FormValues {
  user_name: string;
  user_email: string;
  user_phone: string;
  user_date: string;
  user_time: string;
  user_quantity: string;
  message: string;
}

interface reservProps {
  name: string;
  email: string;
  phone: string;
  people: string;
  text: string;
  button: string;
  thank: string;
  wait: string;
}

export default function ReservationContactForm({
  name,
  email,
  phone,
  people,
  text,
  button,
  thank,
  wait,
}: reservProps) {
  const [nameValue, setNameValue] = useState<string>("");
  const [nameError, setNameError] = useState<boolean>(false);
  const [emailValue, setEmailValue] = useState<string>("");
  const [emailError, setEmailError] = useState<boolean>(false);
  const [buttonDisable, setButtonDisable] = useState<boolean>(false);
  const form = useRef<HTMLFormElement>(null);
  const [emailSent, setEmailSent] = useState(false);

  const handleErrors = () => {
    setNameError(false);
    setEmailError(false);

    if (!nameValue) {
      setNameError(true);
    }
    if (!emailValue) {
      setEmailError(true);
    }
  };

  const handleEmailSent = () => {
    setEmailSent(true);
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    const formData = new FormData(form.current);
    const data: FormValues = {
      user_name: formData.get("user_name"!) as string,
      user_email: formData.get("user_email") as string,
      user_phone: formData.get("user_phone") as string,
      user_date: formData.get("user_date") as string,
      user_time: formData.get("user_time") as string,
      user_quantity: formData.get("user_quantity") as string,
      message: formData.get("message") as string,
    };

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE!,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE!,
        form.current,
        process.env.NEXT_PUBLIC_EMAIL_FORM
      )
      .then(() => {
        handleEmailSent();
      });
  };

  return (
    <div className="container1">
      <div className={styles.reservationWrapper}>
        <div className={styles.reservation}>
          <form
            className={`${styles.form} ${emailSent ? styles.none : ""}`}
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              className={`${styles.input} ${styles.miniInput} ${
                nameError ? styles.inputRed : ""
              }`}
              type="text"
              name="user_name"
              // placeholder={name}
              value={nameValue}
              // onChange={(e) => setNameValue(e.target.value)}
            />
            <div>
              <input
                className={`${styles.input} ${styles.miniInput} ${
                  emailError ? styles.inputRed : ""
                }`}
                type="email"
                name="user_email"
                // placeholder={email}
                value={emailValue}
                // onChange={(e) => setEmailValue(e.target.value)}
              />
              <input
                className={`${styles.input}`}
                type="tel"
                name="user_phone"
                // placeholder={phone}
              />
            </div>
            <div>
              <input
                className={`${styles.input}`}
                type="date"
                name="user_date"
                // placeholder="Date"
              />
              <input
                className={`${styles.input}`}
                type="time"
                name="user_time"
                // placeholder="Time"
              />
            </div>
            <input
              className={`${styles.input}`}
              type="text"
              name="user_quantity"
              // placeholder={people}
            />
            <textarea
              className={`${styles.textArea} ${styles.input}`}
              name="message"
              // placeholder={text}
              value=""
            />

            {/* <button
              type={nameValue && emailValue ? "submit" : "button"}
              className={`button ${styles.button} ${
                !buttonDisable ? "button" : "button1Disabled"
              } w-full
                styles.buttonSend
              `}
              onClick={
                !nameValue || !emailValue
                  ? handleErrors
                  : () => setButtonDisable(true)
              }
            >
              {button}
            </button> */}
          </form>
          <div className={emailSent ? styles.formSent : styles.hide}>
            <h6> {thank}</h6>
            <h5>{wait}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
