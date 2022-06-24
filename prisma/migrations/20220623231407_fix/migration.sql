/*
  Warnings:

  - A unique constraint covering the columns `[titulo]` on the table `noticias` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "noticias_titulo_key" ON "noticias"("titulo");
