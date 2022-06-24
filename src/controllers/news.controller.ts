import { NextFunction, Request, Response } from "express"
import AppError from "../errors/appError"
import { createNews, deleteNotice, readAllNews, readOne, updateNotice } from "../services/news.services"

export const listAllNews = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const news = await readAllNews()

    return response.send(news)
  } catch (e) {
    next(e)
  }
}

export const listById = async (request: Request, response: Response, next: NextFunction) => {
  const { id } = request.params

  try {
    const notice = await readOne(Number(id))

    return response.send(notice)
  } catch (e) {
    next(e)
  }
}

export const create = async (request: Request, response: Response, next: NextFunction) => {
  const data = request.body

  try {
    const res = await createNews(data)

    return response.send(res)
  } catch (e) {
    next(e)
  }
}

export const update = async (request: Request, response: Response, next: NextFunction) => {
  const data = request.body
  const { id } = request.params
  const valids = ['resumo', 'imagem']


  try {

    for (let key in data) {
      if (!valids.includes(key)) {
        throw new AppError(`Apenas as chaves 'resumo' e 'imagem' podem ser editadas`, 401)
      }
    }

    const updatedNotice = await updateNotice(data, Number(id))

    return response.send(updatedNotice)
  } catch (e) {
    next(e)
  }
}

export const deleteNews =async (request: Request, response: Response, next: NextFunction) => { 
  const {id} = request.params

  try {
    const deleted = await deleteNotice(Number(id))

    return response.status(204).send()
  } catch(e) {
    next(e)
  }
}