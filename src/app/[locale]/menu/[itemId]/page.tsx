import { Metadata } from "next";
import { fetchCollectionIfUpdated } from "@/src/lib/firebase/getFirebaseData";
import {
  collectionRoute1,
  companyRoute,
  companyDomain,
} from "@/src/manager/info";
import { defaultLocale } from "@/src/manager/navigation";
import { extractCollectionFields } from "@/src/lib/firebase/types";
import ItemJsx from "./Item/Item";
import { pageRoute } from "../page";

// ✅ SEO Metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ itemId: string; locale: string }>;
}): Promise<Metadata> {
  const { itemId, locale } = await params;

  const collection = await fetchCollectionIfUpdated(
    companyRoute,
    collectionRoute1
  );

  const item = collection?.items?.[itemId];

  if (!item) {
    return {
      title: "Not Found",
      description: "The project you are looking for does not exist",
    };
  }

  const extracted = extractCollectionFields(item, locale);

  return {
    title: extracted.transOption1 || defaultLocale,
    description: extracted.transOption2 || defaultLocale,
    alternates: {
      canonical: `/${locale}/${pageRoute}/${itemId}`,
    },
    openGraph: {
      title: extracted.transOption1,
      description: extracted.transOption2,
      url: `${companyDomain}/${locale}/${pageRoute}/${itemId}`,
      images: [
        {
          url:
            extracted.images?.[0] ||
            `${companyDomain}/images/openGraph/mainOpenGraph.jpg`,
          width: 500,
          height: 300,
          alt: extracted.transOption1,
        },
      ],
    },
  };
}

// ✅ Page Component
export default async function Page({
  params,
}: {
  params: Promise<{ itemId: string; locale: string }>;
}) {
  const { itemId, locale } = await params;
  const collection = await fetchCollectionIfUpdated(
    companyRoute,
    collectionRoute1
  );

  const raw = collection?.items?.[itemId];

  if (!raw) {
    return <div>Project not found</div>;
  }

  const item = extractCollectionFields(raw, locale);

  return (
    <>
      <ItemJsx item={item} />
    </>
  );
}
