"use server";
import { db } from "@/db/drizzle";
import { product } from "@/db/schema";
import { auth } from "@/lib/auth";
import { and, eq } from "drizzle-orm";
import { headers } from "next/headers";

export async function getProductById(id: string) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session?.user.id) return [];
  const userId = session?.user.id;
  const allProducts = await db
    .select()
    .from(product)
    .where(and(eq(product.id, id), eq(product.userId, userId)));
  return allProducts;
}
