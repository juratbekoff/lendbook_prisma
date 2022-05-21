-- CreateTable
CREATE TABLE "Pupil" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "group" TEXT NOT NULL,

    CONSTRAINT "Pupil_pkey" PRIMARY KEY ("id")
);
