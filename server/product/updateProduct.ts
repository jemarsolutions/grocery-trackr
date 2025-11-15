"use server";
import { db } from "@/db/drizzle";
import { product } from "@/db/schema";
import { auth } from "@/lib/auth";
import { and, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";

export async function updateProduct(formData: FormData) {
  const id = formData.get("id") as string;
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session?.user.id) return;
  const userId = session?.user.id;

  await db
    .update(product)
    .set({
      name: formData.get("name") as string,
      brand: formData.get("brand") as string,
      category: formData.get("category") as string,
      quantity: Number(formData.get("quantity")),
      unit: formData.get("unit") as string,
      min_quantity: Number(formData.get("min_quantity")),
      price_per_unit: formData.get("price_per_unit") as string,
      notes: formData.get("notes") as string,
    })
    .where(and(eq(product.id, id), eq(product.userId, userId)));

  revalidatePath(`/products/${product.id}`);
}
