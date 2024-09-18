/*
  Warnings:

  - You are about to drop the column `clientGetting` on the `CommercialOffer` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CommercialOffer" DROP COLUMN "clientGetting",
ADD COLUMN     "clientGettings" JSONB[];
