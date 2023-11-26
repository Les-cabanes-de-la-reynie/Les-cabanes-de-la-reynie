-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_OpeningHours" (
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
INSERT INTO "new_OpeningHours" ("fridayEnd", "fridayStart", "id", "mondayEnd", "mondayStart", "saturdayEnd", "saturdayStart", "sundayEnd", "sundayStart", "thursdayEnd", "thursdayStart", "tuesdayEnd", "tuesdayStart", "wednesdayEnd", "wednesdayStart") SELECT "fridayEnd", "fridayStart", "id", "mondayEnd", "mondayStart", "saturdayEnd", "saturdayStart", "sundayEnd", "sundayStart", "thursdayEnd", "thursdayStart", "tuesdayEnd", "tuesdayStart", "wednesdayEnd", "wednesdayStart" FROM "OpeningHours";
DROP TABLE "OpeningHours";
ALTER TABLE "new_OpeningHours" RENAME TO "OpeningHours";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
