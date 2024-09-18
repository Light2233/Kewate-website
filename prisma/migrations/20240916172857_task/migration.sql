/*
  Warnings:

  - Added the required column `clientName` to the `CommercialOffer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `service` to the `CommercialOffer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CommercialOffer" ADD COLUMN     "clientName" TEXT NOT NULL,
ADD COLUMN     "service" TEXT NOT NULL;
