/*
  Warnings:

  - Made the column `email` on table `customer` required. This step will fail if there are existing NULL values in that column.
  - Made the column `last_update` on table `customer` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `film` required. This step will fail if there are existing NULL values in that column.
  - Made the column `rating` on table `film` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `staff` required. This step will fail if there are existing NULL values in that column.
  - Made the column `password` on table `staff` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "address" ALTER COLUMN "district" DROP NOT NULL,
ALTER COLUMN "phone" DROP NOT NULL;

-- AlterTable
ALTER TABLE "customer" ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "last_update" SET NOT NULL;

-- AlterTable
ALTER TABLE "film" ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "rating" SET NOT NULL;

-- AlterTable
ALTER TABLE "staff" ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "password" SET NOT NULL;
