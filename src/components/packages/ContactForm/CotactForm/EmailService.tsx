import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

interface FormFields {
  user_name: string;
  user_email: string;
  message: string;
}

export const sendEmail =
  (form: HTMLFormElement, handleEmailSent: () => void) =>
  (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData: FormFields = {
      user_name: form.user_name.value,
      user_email: form.user_email.value,
      message: form.message.value,
    };

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE!,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE!,
        form,
        process.env.NEXT_PUBLIC_EMAIL_FORM
      )
      .then(
        (response: EmailJSResponseStatus) => {
          console.log("Email sent successfully:", response);
          handleEmailSent();
        },
        (error: any) => {
          console.error("Failed to send email:", error);
        }
      );
  };
