/*
  Warnings:

  - Changed the type of `mobileNumber` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "mobileNumber",
ADD COLUMN     "mobileNumber" BIGINT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_mobileNumber_key" ON "User"("mobileNumber");
