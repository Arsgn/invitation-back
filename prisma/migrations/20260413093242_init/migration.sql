-- CreateEnum
CREATE TYPE "GuestStatus" AS ENUM ('PENDING', 'ATTENDING', 'DECLINED');

-- CreateTable
CREATE TABLE "Wedding" (
    "id" TEXT NOT NULL,
    "coupleNames" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "ceremonyVenue" TEXT NOT NULL,
    "ceremonyAddress" TEXT NOT NULL,
    "ceremonyLat" DOUBLE PRECISION,
    "ceremonyLng" DOUBLE PRECISION,
    "banquetVenue" TEXT,
    "banquetAddress" TEXT,
    "banquetLat" DOUBLE PRECISION,
    "banquetLng" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Wedding_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Guest" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT,
    "status" "GuestStatus" NOT NULL DEFAULT 'PENDING',
    "plusOne" BOOLEAN NOT NULL DEFAULT false,
    "weddingId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Guest_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Guest" ADD CONSTRAINT "Guest_weddingId_fkey" FOREIGN KEY ("weddingId") REFERENCES "Wedding"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
