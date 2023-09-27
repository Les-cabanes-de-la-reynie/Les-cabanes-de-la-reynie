-- CreateTable
CREATE TABLE "openingHours" (
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

-- CreateTable
CREATE TABLE "VisitorCount" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "count" INTEGER NOT NULL
);
