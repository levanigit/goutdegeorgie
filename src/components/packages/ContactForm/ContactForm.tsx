import styles from "./ContactForm.module.css";
import Contact from "./CotactForm/Contact";

export interface ContactFormProps {
  title1?: string;
  phone?: boolean;
  date?: boolean;
  time?: boolean;
  quantity?: boolean;
  message?: boolean;
  comfirmation?: boolean;
}

export default async function ContactForm({
  title1,
  phone,
  date,
  time,
  quantity,
  message,
  comfirmation,
}: ContactFormProps) {
  return (
    <section className="section">
      <div className="container">
        <div className={styles.reservationWrapper}>
          <div className={styles.reservation}>
            {title1 && <p className="heading6">{title1}</p>}
            <Contact
              phone={phone}
              date={date}
              time={time}
              quantity={quantity}
              message={message}
              comfirmation={comfirmation}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
