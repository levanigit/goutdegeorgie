import ComponentFive from "@/src/components/components/Five/ComponentFive";
import Hero from "@/src/components/components/Hero/Hero";
import {
  instagram1,
  chefImage,
  khachapuri1,
  dishIcon,
  dumplings,
} from "@/public/image";
import Testimonials from "@/src/components/packages/Testimonials/Testimonials";
import { useTranslations } from "next-intl";
import ComponentFour from "@/src/components/components/Four/ComponentFour";
import ComponentTwo from "@/src/components/components/Two/ComponentTwo";
import ComponentSix from "@/src/components/components/Six/ComponentSix";

import ComponentOne from "@/src/components/components/One/ComponentOne";
import ComponentSeven from "@/src/components/components/Seven/ComponentSeven";

export default function Home() {
  const t = useTranslations("homePage");

  return (
    <div className="fadeOut">
      <Hero />
      <ComponentOne image={chefImage} />
      <ComponentSeven
        title1={t("componentSeven.title1")}
        title2={t("componentSeven.title2")}
        text1={t("componentSeven.text1")}
        button={t("componentSeven.button")}
      />

      <ComponentFour
        icon={dishIcon}
        image={khachapuri1}
        title={t("componentFour.2.title")}
        text={t("componentFour.2.text")}
        reverse
      />
      <ComponentFour
        icon={dishIcon}
        image={dumplings}
        title={t("componentFour.1.title")}
        text={t("componentFour.1.text")}
      />
      <ComponentTwo
        title1={t("componentTwo.title1")}
        title2={t("componentTwo.title2")}
        text1={t("componentTwo.text1")}
        text2={t("componentTwo.text2")}
        button={t("componentTwo.button")}
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
