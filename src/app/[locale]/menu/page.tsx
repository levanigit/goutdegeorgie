import { getTranslations } from "next-intl/server";
import Collections from "./collection/Collection";
import PageHeadImage from "@/src/components/components/PageHeadImage/PageHeadImage";
import { heroMenu } from "@/public/image";

export async function generateMetadata() {
  const t = await getTranslations("menuPage.metadata");
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function ProjectsPage() {
  const t = await getTranslations("menuPage");
  return (
    <div className="fadeOut">
      <PageHeadImage image={heroMenu} value={t("headComponent.title")} short />
      <Collections />
    </div>
  );
}
