import Testimonials from "@/src/components/Testimonials/Testimonials";
import { getTranslations } from "next-intl/server";
import { chroisant2, heroReservation } from "@/public/image";
import PageHeadImage from "@/src/components/PageHeadImage/PageHeadImage";
import ReservationContactForm from "@/src/components/ReservationContactForm/ReservationContactForm";

export async function generateMetadata() {
  const t = await getTranslations("reservationPage.metadata");
  return {
    title: t("title"),
    description: t("description"),
  };
}

// Dynamic server-side rendering function that accepts params
export default async function StoryPage() {
  const t = await getTranslations("");
  return (
    <div className="fadeOut">
      <PageHeadImage
        image={chroisant2}
        value={t("reservationPage.headComponent.title")}
      />
      <ReservationContactForm
        name={t("reservationPage.reservationForm.name")}
        email={t("reservationPage.reservationForm.email")}
        phone={t("reservationPage.reservationForm.phone")}
        people={t("reservationPage.reservationForm.people")}
        text={t("reservationPage.reservationForm.text")}
        button={t("reservationPage.reservationForm.button")}
        thank={t("reservationPage.reservationForm.thank")}
        wait={t("reservationPage.reservationForm.wait")}
      />

      <Testimonials
        title1={t("homePage.testimonials.title1")}
        title2={t("homePage.testimonials.title1")}
      />
    </div>
  );
}
