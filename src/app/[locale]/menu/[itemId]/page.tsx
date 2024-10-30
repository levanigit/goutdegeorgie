import MenuDetails from "./eachItemPage/MenuDetails";
import { fetchMenuItem } from "../fetchingData";
import { Metadata } from "next";
import { defaultLocale, dynamicPageRoute } from "@/Manager/navigation";
import { companyDomain } from "@/Manager/info";

type Props = {
  params: {
    lang: string;
    itemId: string;
  };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  try {
    const data = await fetchMenuItem(params.itemId); // Use fetchMenuItem to fetch the data

    if (!data) {
      return {
        title: "Not Found",
        description: "The page you are looking for does not exist",
      };
    }

    // Use params.lang instead of `useLocale` hook
    const itemName = data.names?.[params.lang] || data.names?.[defaultLocale];
    const itemDescription =
      data.descriptions?.[params.lang] || data.descriptions?.[defaultLocale];
    const openGraphImage =
      data.image || `${companyDomain}/images/openGraph/red.jpg`;
    // Fallback image path

    return {
      title: itemName,
      description: itemDescription,
      alternates: {
        canonical: `/${params.lang}/menu/${params.itemId}`,
      },
      openGraph: {
        title: itemName,
        description: itemDescription,
        url: `${companyDomain}/${params.lang}/${dynamicPageRoute}/${params.itemId}`,
        images: [
          {
            url: openGraphImage,
            width: 1200, // Standard Open Graph image width
            height: 630, // Standard Open Graph image height
            alt: itemName,
          },
        ],
      },
    };
  } catch (error) {
    return {
      title: "Not Found",
      description: "The page you are looking for does not exist",
    };
  }
};

interface MenuDetailsPageProps {
  params: {
    itemId: string;
  };
}

export default async function MenuDetailsPage({
  params,
}: MenuDetailsPageProps) {
  const { itemId } = params;

  const item = await fetchMenuItem(itemId);

  if (!item) {
    return null;
    // <div>Item not found</div>;
  }
  const safeItem = {
    ...item,
    names: item.names || {}, // Provide empty object if undefined
    descriptions: item.descriptions || {}, // Provide empty object if undefined
  };

  // Pass the item to MenuDetails component
  return (
    <div className="fadeOut bg-color4">
      <MenuDetails item={safeItem} />
    </div>
  );
}
