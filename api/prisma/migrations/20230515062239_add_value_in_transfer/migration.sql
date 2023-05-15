/*
  Warnings:

  - You are about to drop the column `type_transfer` on the `transfers` table. All the data in the column will be lost.
  - Added the required column `value` to the `transfers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "transfers" DROP COLUMN "type_transfer",
ADD COLUMN     "value" DOUBLE PRECISION NOT NULL;
