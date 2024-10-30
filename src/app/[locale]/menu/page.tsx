import { heroMenu } from "@/public/image";
import Menu from "./menuComponents/menu";
import { getTranslations } from "next-intl/server";
import PageHeadImage from "@/src/components/PageHeadImage/PageHeadImage";
import { useTranslations } from "next-intl";

export async function generateMetadata() {
  const t = await getTranslations("menuPage.metadata");
  return {
    title: t("title"),
    description: t("description"),
  };
}

// Dynamic server-side rendering function that accepts params
export default function MenuPage() {
  const t = useTranslations("menuPage");
  return (
    <div className="fadeOut">
      <PageHeadImage image={heroMenu} value={t("headComponent.title")} short />
      <Menu />
    </div>
  );
}
