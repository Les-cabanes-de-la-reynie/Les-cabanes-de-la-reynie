/*
  Warnings:

  - You are about to drop the `openingHours` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "openingHours";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "OpeningHours" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "mondayStart" DATETIME,
    "mondayEnd" DATETIME,
    "tuesdayStart" DATETIME,
    "tuesdayEnd" DATETIME,
    "wednesdayStart" DATETIME,
    "wednesdayEnd" DATETIME,
    "thursdayStart" DATETIME,
    "thursdayEnd" DATETIME,
    "fridayStart" DATETIME,
    "fridayEnd" DATETIME,
    "saturdayStart" DATETIME,
    "saturdayEnd" DATETIME,
    "sundayStart" DATETIME,
    "sundayEnd" DATETIME
);
