ALTER TABLE "product" ALTER COLUMN "price_per_unit" SET DATA TYPE numeric(10, 2);--> statement-breakpoint
ALTER TABLE "product" ALTER COLUMN "created_at" DROP NOT NULL;