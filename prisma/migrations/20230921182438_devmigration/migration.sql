-- CreateTable
CREATE TABLE "openingHours" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "mondayStart" DATETIME NOT NULL,
    "mondayEnd" DATETIME NOT NULL,
    "tuesdayStart" DATETIME NOT NULL,
    "tuesdayEnd" DATETIME NOT NULL,
    "wednesdayStart" DATETIME NOT NULL,
    "wednesdayEnd" DATETIME NOT NULL,
    "thursdayStart" DATETIME NOT NULL,
    "thursdayEnd" DATETIME NOT NULL,
    "fridayStart" DATETIME NOT NULL,
    "fridayEnd" DATETIME NOT NULL,
    "saturdayStart" DATETIME NOT NULL,
    "saturdayEnd" DATETIME NOT NULL,
    "sundayStart" DATETIME NOT NULL,
    "sundayEnd" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "VisitorCount" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "count" INTEGER NOT NULL
);
