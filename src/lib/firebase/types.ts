import { supportedLocales } from "@/src/manager/navigation";
export interface CollectionWrapper {
  items?: { [key: string]: CollectionProps };
  categories?: any; // Optional: type it properly if needed
  metadata?: {
    collectionTimestamp?: number;
  };
  [key: string]: any; // in case other stuff exists
}

export interface CollectionProps {
  id: string;
  images?: string[];
  itemActive?: boolean;
  itemTimestamp?: number;
  itemCategories?: {
    [categoryId: string]: {
      order?: number;
    };
  };

  // ✅ All possible booleans
  booleans?: {
    option1?: boolean;
    option2?: boolean;
    option3?: boolean;
    option4?: boolean;
    option5?: boolean;
    option6?: boolean;
    option7?: boolean;
    option8?: boolean;
  };

  // ✅ All possible translatable texts
  transTexts?: {
    transOption1?: { [locale: string]: string };
    transOption2?: { [locale: string]: string };
    transOption3?: { [locale: string]: string };
    transOption4?: { [locale: string]: string };
    transOption5?: { [locale: string]: string };
    transOption6?: { [locale: string]: string };
    transOption7?: { [locale: string]: string };
    transOption8?: { [locale: string]: string };
    transOption9?: { [locale: string]: string };
  };

  // ✅ All possible non-translatable texts
  noTransTexts?: {
    noTransOption1?: string;
    noTransOption2?: string;
    noTransOption3?: string;
    noTransOption4?: string;
    noTransOption5?: string;
    noTransOption6?: string;
    noTransOption7?: string;
    noTransOption8?: string;
    noTransOption9?: string;
  };

  // ✅ All possible number fields
  numberValues?: {
    number1?: number;
    number2?: number;
    number3?: number;
    number4?: number;
  };

  // ✅ Optional: categories (already in your logic)
  category: {
    [locale: string]: string;
  };
}

function getTranslatedValue(
  obj: Record<string, string> | undefined,
  locale: string
): string {
  if (!obj) return "";
  return obj[locale] || supportedLocales.map((l) => obj[l]).find(Boolean) || "";
}
export type ReturnTypeOfExtract = ReturnType<typeof extractCollectionFields>;
export function extractCollectionFields(item: CollectionProps, locale: string) {
  const trans = item.transTexts || {};
  const noTrans = item.noTransTexts || {};
  const bools = item.booleans || {};
  const numbers = item.numberValues || {};

  return {
    id: item.id,
    images: item.images || [],
    itemActive: item.itemActive || false,
    itemTimestamp: item.itemTimestamp || 0,
    category: item.category?.[locale] || "",

    // Translatable texts
    transOption1: getTranslatedValue(trans.transOption1, locale),
    transOption2: getTranslatedValue(trans.transOption2, locale),
    transOption3: getTranslatedValue(trans.transOption3, locale),
    transOption4: getTranslatedValue(trans.transOption4, locale),
    transOption5: getTranslatedValue(trans.transOption5, locale),
    transOption6: getTranslatedValue(trans.transOption6, locale),
    transOption7: getTranslatedValue(trans.transOption7, locale),
    transOption8: getTranslatedValue(trans.transOption8, locale),
    transOption9: getTranslatedValue(trans.transOption9, locale),

    // Non-translatable
    noTransOption1: noTrans.noTransOption1 || "",
    noTransOption2: noTrans.noTransOption2 || "",
    noTransOption3: noTrans.noTransOption3 || "",
    noTransOption4: noTrans.noTransOption4 || "",
    noTransOption5: noTrans.noTransOption5 || "",
    noTransOption6: noTrans.noTransOption6 || "",
    noTransOption7: noTrans.noTransOption7 || "",
    noTransOption8: noTrans.noTransOption8 || "",
    noTransOption9: noTrans.noTransOption9 || "",

    boolOption1: bools.option1 ?? false,
    boolOption2: bools.option2 ?? false,
    boolOption3: bools.option3 ?? false,
    boolOption4: bools.option4 ?? false,
    boolOption5: bools.option5 ?? false,
    boolOption6: bools.option6 ?? false,
    boolOption7: bools.option7 ?? false,
    boolOption8: bools.option8 ?? false,

    // Numbers (explicit)
    number1: numbers.number1 ?? null,
    number2: numbers.number2 ?? null,
    number3: numbers.number3 ?? null,
    number4: numbers.number4 ?? null,

    // Category

    // Original object
    full: item,
  };
}
