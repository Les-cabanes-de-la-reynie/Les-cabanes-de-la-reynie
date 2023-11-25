-- CreateTable
CREATE TABLE "Image" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "imageKey" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "category" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_OpeningHours" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "mondayStart" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "mondayEnd" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tuesdayStart" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tuesdayEnd" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "wednesdayStart" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "wednesdayEnd" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "thursdayStart" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "thursdayEnd" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fridayStart" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fridayEnd" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "saturdayStart" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "saturdayEnd" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sundayStart" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sundayEnd" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_OpeningHours" ("fridayEnd", "fridayStart", "id", "mondayEnd", "mondayStart", "saturdayEnd", "saturdayStart", "sundayEnd", "sundayStart", "thursdayEnd", "thursdayStart", "tuesdayEnd", "tuesdayStart", "wednesdayEnd", "wednesdayStart") SELECT coalesce("fridayEnd", CURRENT_TIMESTAMP) AS "fridayEnd", coalesce("fridayStart", CURRENT_TIMESTAMP) AS "fridayStart", "id", coalesce("mondayEnd", CURRENT_TIMESTAMP) AS "mondayEnd", coalesce("mondayStart", CURRENT_TIMESTAMP) AS "mondayStart", coalesce("saturdayEnd", CURRENT_TIMESTAMP) AS "saturdayEnd", coalesce("saturdayStart", CURRENT_TIMESTAMP) AS "saturdayStart", coalesce("sundayEnd", CURRENT_TIMESTAMP) AS "sundayEnd", coalesce("sundayStart", CURRENT_TIMESTAMP) AS "sundayStart", coalesce("thursdayEnd", CURRENT_TIMESTAMP) AS "thursdayEnd", coalesce("thursdayStart", CURRENT_TIMESTAMP) AS "thursdayStart", coalesce("tuesdayEnd", CURRENT_TIMESTAMP) AS "tuesdayEnd", coalesce("tuesdayStart", CURRENT_TIMESTAMP) AS "tuesdayStart", coalesce("wednesdayEnd", CURRENT_TIMESTAMP) AS "wednesdayEnd", coalesce("wednesdayStart", CURRENT_TIMESTAMP) AS "wednesdayStart" FROM "OpeningHours";
DROP TABLE "OpeningHours";
ALTER TABLE "new_OpeningHours" RENAME TO "OpeningHours";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
