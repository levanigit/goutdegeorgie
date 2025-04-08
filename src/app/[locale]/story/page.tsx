import Testimonials from "@/src/components/packages/Testimonials/Testimonials";
import { getTranslations } from "next-intl/server";
import PageHeadImage from "@/src/components/components/PageHeadImage/PageHeadImage";
import {
  badrijani,
  dishIcon,
  dumplings,
  heroMenu,
  heroReservation,
  heroStory,
  khachapuri2,
  womanChef,
} from "@/public/image";
import ComponentTwo from "@/src/components/Two/ComponentTwo";
import ComponentThree from "@/src/components/components/Three/ComponentThree";
import ComponentFour from "@/src/components/components/Four/ComponentFour";
import ComponentSeven from "@/src/components/components/Seven/ComponentSeven";

export async function generateMetadata() {
  const t = await getTranslations("storyPage.metadata");
  return {
    title: t("title"),
    description: t("description"),
  };
}

// Dynamic server-side rendering function that accepts params
export default async function StoryPage() {
  const t = await getTranslations("storyPage");
  return (
    <div className="fadeOut">
      <PageHeadImage image={heroStory} value={t("headComponent.title")} short />
      <ComponentSeven
        title1={t("componentSeven.title1")}
        title2={t("componentSeven.title2")}
        text1={t("componentSeven.text1")}
        button={t("componentSeven.button")}
      />
      <ComponentFour
        icon={dishIcon}
        image={heroMenu}
        title={t("componentFour.1.title")}
        text={t("componentFour.1.text")}
      />
      <ComponentFour
        icon={dishIcon}
        image={dumplings}
        title={t("componentFour.2.title")}
        text={t("componentFour.2.text")}
        reverse
      />
      {/* <ComponentThree image={womanChef} /> */}
      <ComponentFour
        icon={dishIcon}
        image={heroStory}
        title={t("componentFour.3.title")}
        text={t("componentFour.3.text")}
      />
      <ComponentTwo
        title1={t("componentTwo.title1")}
        title2={t("componentTwo.title2")}
        text1={t("componentTwo.text1")}
        text2={t("componentTwo.text2")}
        button={t("componentTwo.button")}
      />
      <ComponentFour
        icon={dishIcon}
        image={heroReservation}
        title={t("componentFour.4.title")}
        text={t("componentFour.4.text")}
        reverse
      />
      <ComponentFour
        icon={dishIcon}
        image={khachapuri2}
        title={t("componentFour.5.title")}
        text={t("componentFour.5.text")}
      />
      <ComponentFour
        icon={dishIcon}
        image={badrijani}
        title={t("componentFour.6.title")}
        text={t("componentFour.6.text")}
        reverse
      />

      {/* 
      <Testimonials
        title1={t("homePage.testimonials.title1")}
        title2={t("homePage.testimonials.title2")}
      /> */}
    </div>
  );
}
