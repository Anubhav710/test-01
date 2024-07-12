import { createClient } from "next-sanity";

import { token, apiVersion, dataset, projectId, useCdn } from "../env";

export const readClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  perspective: "published",
});
export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  token,
  perspective: "published",
});
