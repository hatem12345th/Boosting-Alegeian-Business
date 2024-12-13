/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "User";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "user" (
    "userID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Problem" (
    "problemID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "budget" REAL NOT NULL,
    "status" TEXT NOT NULL,
    "attachments" TEXT,
    "userID" INTEGER NOT NULL,
    "dealID" INTEGER,
    CONSTRAINT "Problem_userID_fkey" FOREIGN KEY ("userID") REFERENCES "user" ("userID") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "SolutionProvider" (
    "providerID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "expertise" TEXT NOT NULL,
    "portfolio" TEXT NOT NULL,
    "rating" REAL NOT NULL,
    "problemAlignment" TEXT NOT NULL,
    "technologiesUsed" TEXT NOT NULL,
    "teamExperience" TEXT NOT NULL,
    "teamNumber" INTEGER NOT NULL,
    "createdDate" DATETIME NOT NULL,
    "startReview" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "Proposal" (
    "proposalID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userID" INTEGER NOT NULL,
    "problemID" INTEGER NOT NULL,
    "details" TEXT NOT NULL,
    "financialOffer" REAL NOT NULL,
    "solutionProviderID" INTEGER NOT NULL,
    CONSTRAINT "Proposal_userID_fkey" FOREIGN KEY ("userID") REFERENCES "user" ("userID") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Proposal_problemID_fkey" FOREIGN KEY ("problemID") REFERENCES "Problem" ("problemID") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Proposal_solutionProviderID_fkey" FOREIGN KEY ("solutionProviderID") REFERENCES "SolutionProvider" ("providerID") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Payment" (
    "paymentID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userID" INTEGER NOT NULL,
    "amount" REAL NOT NULL,
    "currency" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    CONSTRAINT "Payment_userID_fkey" FOREIGN KEY ("userID") REFERENCES "user" ("userID") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Notification" (
    "notificationID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "message" TEXT NOT NULL,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userID" INTEGER NOT NULL,
    "problemID" INTEGER,
    "dealID" INTEGER,
    CONSTRAINT "Notification_userID_fkey" FOREIGN KEY ("userID") REFERENCES "user" ("userID") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Notification_problemID_fkey" FOREIGN KEY ("problemID") REFERENCES "Problem" ("problemID") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Notification_dealID_fkey" FOREIGN KEY ("dealID") REFERENCES "Deal" ("dealID") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Deal" (
    "dealID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "problemID" INTEGER NOT NULL,
    "solutionProviderID" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    CONSTRAINT "Deal_problemID_fkey" FOREIGN KEY ("problemID") REFERENCES "Problem" ("problemID") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Deal_solutionProviderID_fkey" FOREIGN KEY ("solutionProviderID") REFERENCES "SolutionProvider" ("providerID") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Message" (
    "messageID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "senderID" INTEGER NOT NULL,
    "receiverID" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "timestamp" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dealID" INTEGER,
    CONSTRAINT "Message_senderID_fkey" FOREIGN KEY ("senderID") REFERENCES "user" ("userID") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Message_receiverID_fkey" FOREIGN KEY ("receiverID") REFERENCES "SolutionProvider" ("providerID") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Message_dealID_fkey" FOREIGN KEY ("dealID") REFERENCES "Deal" ("dealID") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_PaymentDeals" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_PaymentDeals_A_fkey" FOREIGN KEY ("A") REFERENCES "Deal" ("dealID") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_PaymentDeals_B_fkey" FOREIGN KEY ("B") REFERENCES "Payment" ("paymentID") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_UserDeals" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_UserDeals_A_fkey" FOREIGN KEY ("A") REFERENCES "Deal" ("dealID") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_UserDeals_B_fkey" FOREIGN KEY ("B") REFERENCES "user" ("userID") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Proposal_problemID_key" ON "Proposal"("problemID");

-- CreateIndex
CREATE UNIQUE INDEX "Deal_problemID_key" ON "Deal"("problemID");

-- CreateIndex
CREATE UNIQUE INDEX "_PaymentDeals_AB_unique" ON "_PaymentDeals"("A", "B");

-- CreateIndex
CREATE INDEX "_PaymentDeals_B_index" ON "_PaymentDeals"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_UserDeals_AB_unique" ON "_UserDeals"("A", "B");

-- CreateIndex
CREATE INDEX "_UserDeals_B_index" ON "_UserDeals"("B");
