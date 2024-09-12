-- CreateTable
CREATE TABLE "CommercialOffer" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "task" JSONB NOT NULL,
    "userProblems" JSONB[],
    "projects" TEXT[],
    "clientGetting" JSONB[],

    CONSTRAINT "CommercialOffer_pkey" PRIMARY KEY ("id")
);
