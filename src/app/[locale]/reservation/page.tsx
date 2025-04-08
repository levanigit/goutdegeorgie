import Testimonials from "@/src/components/packages/Testimonials/Testimonials";
import { getTranslations } from "next-intl/server";
import { chroisant2, heroReservation } from "@/public/image";
import PageHeadImage from "@/src/components/components/PageHeadImage/PageHeadImage";

import ContactForm from "@/src/components/packages/ContactForm/ContactForm";
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

      <ContactForm
        title1={t("reservationForm.title1")}
        time
        date
        quantity
        message
        phone
      />

      <Testimonials
        title1={t("homePage.testimonials.title1")}
        title2={t("homePage.testimonials.title1")}
      />
    </div>
  );
}
