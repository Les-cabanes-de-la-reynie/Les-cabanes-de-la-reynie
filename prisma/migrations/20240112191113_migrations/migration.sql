-- CreateTable
CREATE TABLE "OpeningHours" (
    "id" SERIAL NOT NULL,
    "mondayStart" TIMESTAMP(3) NOT NULL,
    "mondayEnd" TIMESTAMP(3) NOT NULL,
    "tuesdayStart" TIMESTAMP(3) NOT NULL,
    "tuesdayEnd" TIMESTAMP(3) NOT NULL,
    "wednesdayStart" TIMESTAMP(3) NOT NULL,
    "wednesdayEnd" TIMESTAMP(3) NOT NULL,
    "thursdayStart" TIMESTAMP(3) NOT NULL,
    "thursdayEnd" TIMESTAMP(3) NOT NULL,
    "fridayStart" TIMESTAMP(3) NOT NULL,
    "fridayEnd" TIMESTAMP(3) NOT NULL,
    "saturdayStart" TIMESTAMP(3) NOT NULL,
    "saturdayEnd" TIMESTAMP(3) NOT NULL,
    "sundayStart" TIMESTAMP(3) NOT NULL,
    "sundayEnd" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OpeningHours_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VisitorCount" (
    "id" SERIAL NOT NULL,
    "count" INTEGER NOT NULL,

    CONSTRAINT "VisitorCount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Image" (
    "id" TEXT NOT NULL,
    "imageKey" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Address" (
    "id" SERIAL NOT NULL,
    "address" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "phone" TEXT NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);
