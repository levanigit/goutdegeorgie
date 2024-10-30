import Testimonials from "@/src/components/Testimonials/Testimonials";
import { getTranslations } from "next-intl/server";
import PageHeadImage from "@/src/components/PageHeadImage/PageHeadImage";
import { chroisant2, womanChef } from "@/public/image";
import ComponentTwo from "@/src/components/Two/ComponentTwo";
import ComponentThree from "@/src/components/Three/ComponentThree";

export async function generateMetadata() {
  const t = await getTranslations("storyPage.metadata");
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
        value={t("storyPage.headComponent.title")}
        short
      />
      <ComponentTwo />

      <ComponentThree image={womanChef} />

      <Testimonials
        title1={t("homePage.testimonials.title1")}
        title2={t("homePage.testimonials.title2")}
      />
    </div>
  );
}
