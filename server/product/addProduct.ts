"use server";
import { db } from "@/db/drizzle";
import { product } from "@/db/schema";
import fs from "fs";
import path from "path";

export async function addProduct(formData: FormData) {
  const userId = formData.get("userId") as string;
  const name = formData.get("name") as string;
  const brand = formData.get("brand") as string;
  const category = formData.get("category") as string;
  const quantity = Number(formData.get("quantity"));
  const unit = formData.get("unit") as string;
  const min_quantity = Number(formData.get("min_quantity"));
  const price_per_unit = formData.get("price_per_unit") as string;

  const imageFile = formData.get("image") as File;
  let imagePath = "";

  if (imageFile) {
    const fileName = `${Date.now()}-${imageFile.name}`;
    const filePath = path.join(process.cwd(), "public/images", fileName);

    const buffer = Buffer.from(await imageFile.arrayBuffer());
    fs.writeFileSync(filePath, buffer);

    imagePath = `/images/${fileName}`;
  }

  const notes = formData.get("notes") as string;

  await db.insert(product).values({
    userId,
    name,
    brand,
    category,
    quantity,
    unit,
    min_quantity,
    price_per_unit,
    image: imagePath,
    notes,
  });
}
