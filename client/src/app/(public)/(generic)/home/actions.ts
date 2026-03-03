"use server";

import { stringify } from "qs";
import { cms } from "@/lib/axios";

import { pageParams } from "./params";
import { PageResponse } from "./types";

export async function getPage() {
  const params = stringify(pageParams);
  const response = await cms.get<PageResponse>(`/home-page?${params}`);

  return response.data;
}