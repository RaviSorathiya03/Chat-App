/*
  Warnings:

  - You are about to drop the column `createdAt` on the `OTP` table. All the data in the column will be lost.
  - You are about to drop the column `isValid` on the `OTP` table. All the data in the column will be lost.
  - You are about to drop the column `otp` on the `OTP` table. All the data in the column will be lost.
  - You are about to drop the column `phoneNumber` on the `OTP` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[username]` on the table `OTP` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[mobileNumber]` on the table `OTP` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `mobileNumber` to the `OTP` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `OTP` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `OTP` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OTP" DROP COLUMN "createdAt",
DROP COLUMN "isValid",
DROP COLUMN "otp",
DROP COLUMN "phoneNumber",
ADD COLUMN     "mobileNumber" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "username" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "OTP_username_key" ON "OTP"("username");

-- CreateIndex
CREATE UNIQUE INDEX "OTP_mobileNumber_key" ON "OTP"("mobileNumber");
