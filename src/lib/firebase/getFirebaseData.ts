// collectionFetcher.ts
import { ref, get, getDatabase } from "firebase/database";
import { app } from "./firebase";
import { CollectionWrapper } from "./types"; // ✅ make sure CollectionWrapper includes 'items'

// Firebase DB instance
const db = getDatabase(app);

// 🔁 In-memory cache
let lastFetchedTimestamps: Record<string, number> = {};
let cachedCollections: Record<string, CollectionWrapper> = {};

// 🧠 Unique key per collection
function getCacheKey(companyRoute: string, collectionRoute: string): string {
  return `${companyRoute}__${collectionRoute}`;
}

// ✅ Check if collection was updated
export async function hasCollectionUpdated(
  companyRoute: string,
  collectionRoute: string
): Promise<boolean> {
  const cacheKey = getCacheKey(companyRoute, collectionRoute);
  const timestampRef = ref(
    db,
    `companiesData/${companyRoute}/collections/${collectionRoute}/metadata/collectionTimestamp`
  );
  const snapshot = await get(timestampRef);

  if (!snapshot.exists()) {
    return false;
  }

  const serverTimestamp = snapshot.val();
  const cachedTimestamp = lastFetchedTimestamps[cacheKey];
  if (!cachedTimestamp || serverTimestamp > cachedTimestamp) {
    lastFetchedTimestamps[cacheKey] = serverTimestamp;
    return true;
  }
  return false;
}

// ✅ Fetch only if updated, otherwise use cache
export async function fetchCollectionIfUpdated(
  companyRoute: string,
  collectionRoute: string
): Promise<CollectionWrapper | null> {
  const cacheKey = getCacheKey(companyRoute, collectionRoute);

  const isUpdated = await hasCollectionUpdated(companyRoute, collectionRoute);

  if (!isUpdated && cachedCollections[cacheKey]) {
    return cachedCollections[cacheKey];
  }
  const collectionRef = ref(
    db,
    `companiesData/${companyRoute}/collections/${collectionRoute}`
  );
  const snapshot = await get(collectionRef);

  if (!snapshot.exists()) {
    return null;
  }

  const data = snapshot.val() as CollectionWrapper;
  cachedCollections[cacheKey] = data;

  return data;
}
