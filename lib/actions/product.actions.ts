"use server";
import { prisma } from "@/db/prisma";
import { convertToPlainObject } from "../utils";
import { LATESTEST_PRODUCT_LIMIT } from "../constants";

// get latest product
export async function getLatestProducts() {
  const data = await prisma.product.findMany({
    take: LATESTEST_PRODUCT_LIMIT,
    orderBy: { createdAt: "desc" },
  });

  return convertToPlainObject(data);
}
