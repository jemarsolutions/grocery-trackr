"use server";

import { db } from "@/db/drizzle";
import { product } from "@/db/schema";
import { auth } from "@/lib/auth";
import { and, eq, lte } from "drizzle-orm";
import { headers } from "next/headers";

export async function getAllToBuyProducts() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session?.user.id) return [];
  const userId = session?.user.id;
  const allProducts = await db
    .select()
    .from(product)
    .where(
      and(
        eq(product.userId, userId),
        lte(product.quantity, product.min_quantity)
      )
    );
  return allProducts;
}
