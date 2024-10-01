import { companyDomain, companyName } from "@/Manager/info";
import ComponentFive from "@/src/components/Five/ComponentFive";
import Hero from "@/src/components/Hero/Hero";
import { getTranslations } from "next-intl/server";
import {
  instagram1,
  instagram2,
  instagram3,
  instagram4,
  chefImage,
  womanChef,
} from "@/public/image";
import ComponentOne from "@/public/One/ComponentOne";
import Testimonials from "@/src/components/Testimonials/Testimonials";
import { useTranslations } from "next-intl";
import ComponentFour from "@/src/components/Four/ComponentFour";
import ComponentTwo from "@/src/components/Two/ComponentTwo";
import ComponentSix from "@/src/components/Six/ComponentSix";
import ComponentThree from "@/src/components/Three/ComponentThree";

export async function generateMetadata() {
  const t = await getTranslations("homePage.metadata");
  return {
    metadataBase: new URL(companyDomain),
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: companyName,
      description: t("description"),
      url: companyDomain,
    },
  };
}

export default function Home() {
  const t = useTranslations("homePage");

  return (
    <div className="fadeOut">
      <Hero />
      <ComponentOne image={chefImage} />
      <ComponentTwo />
      <ComponentThree image={womanChef} />
      <ComponentFour
        icon={instagram1}
        image={instagram2}
        title={t("componentFour.1.title")}
        text={t("componentFour.1.text")}
      />
      <ComponentFour
        icon={instagram2}
        image={instagram1}
        title={t("componentFour.2.title")}
        text={t("componentFour.2.text")}
        reverse
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
