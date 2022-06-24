-- CreateTable
CREATE TABLE "noticias" (
    "id" SERIAL NOT NULL,
    "titulo" VARCHAR NOT NULL,
    "resumo" VARCHAR NOT NULL,
    "noticia_completa" VARCHAR NOT NULL,
    "categoria" VARCHAR NOT NULL,
    "fonte" VARCHAR NOT NULL,
    "imagem" VARCHAR NOT NULL,

    CONSTRAINT "noticias_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "noticias_id_key" ON "noticias"("id");
