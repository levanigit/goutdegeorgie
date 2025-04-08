import ComponentFive from "@/src/components/components/Five/ComponentFive";
import Hero from "@/src/components/components/Hero/Hero";
import { chefImage, khachapuri1, dishIcon, dumplings } from "@/public/image";
import Testimonials from "@/src/components/packages/Testimonials/Testimonials";
import ComponentFour from "@/src/components/components/Four/ComponentFour";
import ComponentTwo from "@/src/components/components/Two/ComponentTwo";
import ComponentSix from "@/src/components/components/Six/ComponentSix";

import ComponentOne from "@/src/components/components/One/ComponentOne";
import ComponentSeven from "@/src/components/components/Seven/ComponentSeven";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations("");

  return (
    <div className="fadeOut">
      <Hero />
      <ComponentOne image={chefImage} />
      <ComponentSeven
        title1={t("homePage.componentSeven.title1")}
        title2={t("homePage.componentSeven.title2")}
        text1={t("homePage.componentSeven.text1")}
        button={t("homePage.componentSeven.button")}
      />

      <ComponentFour
        icon={dishIcon}
        image={khachapuri1}
        title={t("homePage.componentFour.2.title")}
        text={t("homePage.componentFour.2.text")}
        reverse
      />
      <ComponentFour
        icon={dishIcon}
        image={dumplings}
        title={t("homePage.componentFour.1.title")}
        text={t("homePage.componentFour.1.text")}
      />
      <ComponentTwo
        title1={t("homePage.componentTwo.title1")}
        title2={t("homePage.componentTwo.title2")}
        text1={t("homePage.componentTwo.text1")}
        text2={t("homePage.componentTwo.text2")}
        button={t("homePage.componentTwo.button")}
      />

      <ComponentFive />

      <Testimonials
        title1={t("testimonials.title1")}
        title2={t("testimonials.title2")}
      />
      <ComponentSix />
    </div>
  );
}
