"use client";
import React, { useRef, useState } from "react";
import { sendEmail } from "./EmailService";
import styles from "./Contact.module.css";
import { useLocale } from "next-intl";
import { ContactFormProps } from "../ContactForm";

const contactFormValues = {
  en: {
    name: "Full Name",
    email: "Email",
    phone: "Phone",
    date: "Date",
    time: "Time",
    quantity: "Rooms Needed",
    message: "Your request here",
    button: "Submit",
    send: "Send Inquiry",
    thankYou: "Thanks for reaching out!",
    comfirmation: "We'll respond as soon as possible.",
  },
  fr: {
    name: "Nom complet",
    email: "Email",
    phone: "Téléphone",
    date: "Date",
    time: "Heure",
    quantity: "Nombre de pièces",
    message: "Votre demande ici",
    button: "Envoyer",
    send: "Envoyer la demande",
    thankYou: "Merci pour votre message !",
    comfirmation: "Je vous répondrai dès que possible.",
  },
  de: {
    name: "Vollständiger Name",
    email: "E-Mail",
    phone: "Telefon",
    date: "Datum",
    time: "Uhrzeit",
    quantity: "Anzahl der Räume",
    message: "Deine Anfrage hier",
    button: "Absenden",
    send: "Anfrage senden",
    thankYou: "Danke für deine Nachricht!",
    comfirmation: "Ich melde mich so schnell wie möglich bei dir.",
  },
  it: {
    name: "Nome completo",
    email: "Email",
    phone: "Telefono",
    date: "Data",
    time: "Orario",
    quantity: "Numero di stanze",
    message: "La tua richiesta qui",
    button: "Invia",
    send: "Invia richiesta",
    thankYou: "Grazie per il tuo messaggio!",
    comfirmation: "Ti risponderò al più presto.",
  },
};

const Contact: React.FC<ContactFormProps> = ({
  phone,
  date,
  time,
  quantity,
  message,
  comfirmation,
}) => {
  const locale = useLocale() as keyof typeof contactFormValues;
  const t = contactFormValues[locale];

  const form = useRef<HTMLFormElement>(null);
  const [emailSent, setEmailSent] = useState(false);
  const [buttonDisable, setButtonDisable] = useState(false);

  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [timeValue, setTimeValue] = useState("");
  const [quantityValue, setQuantityValue] = useState("");

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const handleErrors = () => {
    setNameError(!nameValue);
    setEmailError(!emailValue || !emailValue.includes("@"));
    setMessageError(!messageValue);
  };

  const handleEmailSent = () => setEmailSent(true);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!form.current) return;
    sendEmail(form.current, handleEmailSent)(e);
  };

  return (
    <div className={""}>
      <form
        className={`${styles.form} ${emailSent ? styles.none : ""}`}
        ref={form}
        onSubmit={onSubmit}
      >
        <div className={styles.inputGroup}>
          <input
            className={`${styles.input} ${nameError ? styles.inputRed : ""}`}
            type="text"
            name="user_name"
            placeholder={t.name}
            value={nameValue}
            onChange={(e) => setNameValue(e.target.value)}
          />

          {phone && (
            <input
              className={styles.input}
              type="tel"
              name="user_phone"
              placeholder={t.phone}
              value={phoneValue}
              onChange={(e) => setPhoneValue(e.target.value)}
            />
          )}

          {date && (
            <input
              className={styles.input}
              type="date"
              name="user_date"
              placeholder={t.date}
              value={dateValue}
              onChange={(e) => setDateValue(e.target.value)}
            />
          )}

          {time && (
            <input
              className={styles.input}
              type="time"
              name="user_time"
              placeholder={t.time}
              value={timeValue}
              onChange={(e) => setTimeValue(e.target.value)}
            />
          )}

          {quantity && (
            <input
              className={styles.input}
              type="number"
              name="user_quantity"
              placeholder={t.quantity}
              value={quantityValue}
              onChange={(e) => setQuantityValue(e.target.value)}
            />
          )}

          <input
            className={`${styles.input} ${emailError ? styles.inputRed : ""}`}
            type="email"
            name="user_email"
            placeholder={t.email}
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
          />
        </div>

        {message && (
          <textarea
            className={`${styles.textArea} ${styles.input} ${
              messageError ? styles.inputRed : ""
            }`}
            name="message"
            placeholder={t.message}
            value={messageValue}
            onChange={(e) => setMessageValue(e.target.value)}
          />
        )}

        <button
          type={
            nameValue && messageValue && emailValue.includes("@")
              ? "submit"
              : "button"
          }
          className={`button ${styles.buttonSend} ${
            !buttonDisable ? "button" : "buttonDisabled"
          }`}
          onClick={
            !nameValue || !messageValue || !emailValue.includes("@")
              ? handleErrors
              : () => setButtonDisable(true)
          }
        >
          {t.button}
        </button>
      </form>
      {emailSent && (
        <div className={styles.formSent}>
          <h6 className="heading4">{t.thankYou}</h6>
          {comfirmation && <p className="paragraph">{t.comfirmation}</p>}
        </div>
      )}
    </div>
  );
};

export default Contact;
