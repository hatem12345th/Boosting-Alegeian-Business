-- AlterTable
ALTER TABLE "user" ADD COLUMN "resetToken" TEXT;
ALTER TABLE "user" ADD COLUMN "resetTokenExpiry" DATETIME;
