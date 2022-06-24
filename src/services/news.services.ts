import { prisma } from ".."
import AppError from "../errors/appError"

interface DataCreateNews {
  titulo: string
  resumo: string
  noticia_completa: string
  categoria: string
  fonte: string
  imagem: string
}

interface ResponseCreateNews {
  id: number
  titulo: string
  resumo: string
  noticia_completa: string
  categoria: string
  fonte: string
  imagem: string
}

interface UpdateNotice {
  resumo: string
  imagem: string
}

export const createNews = async (data: DataCreateNews): Promise<ResponseCreateNews> => {
  const check = await prisma.news.findUnique({where: {titulo: data.titulo}})

  if(check) {
    throw new AppError('Este título já existe, por favor insira um novo título')
  }

  const news = await prisma.news.create({
    data: data
  })

  return news
}

export const readAllNews = async () => {
  const news = await prisma.news.findMany({})

  return news
}

export const readOne = async (id: number) => {
  const notice = await prisma.news.findUnique({where: {id}})

  if(!notice) {
    throw new AppError('noticia não encontrada', 404)
  }

  return notice
}

export const updateNotice = async (data: UpdateNotice, id: number) => {

  const notice = await prisma.news.findUnique({where: {id}})

  if(notice?.imagem === data.imagem || notice?.resumo === data.resumo) {
    throw new AppError('Valor idêntico ao atual')
  }

  const updateNotice = await prisma.news.update({
    where: {id},
    data: data
  })

  return updateNotice
}

export const deleteNotice = async (id: number) => {
  const notice = await prisma.news.findUnique({where: {id}})

  if(!notice) {
    throw new AppError('notícia não encontrada', 404)
  }

  const deleted = await prisma.news.delete({where: {id}})

  return deleted
}