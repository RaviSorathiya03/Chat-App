-- CreateTable
CREATE TABLE "OTP" (
    "id" SERIAL NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "otp" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isValid" BOOLEAN NOT NULL DEFAULT true,
    "firstName" TEXT,
    "lastName" TEXT,
    "profilePhoto" TEXT,

    CONSTRAINT "OTP_pkey" PRIMARY KEY ("id")
);
