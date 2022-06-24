import { Router } from "express";
import { create, deleteNews, listAllNews, listById, update } from "../controllers/news.controller";

export const newsRouter = Router()

newsRouter.post('/6922a821fb23e6eb449dc7670c3dfafe', create)
newsRouter.get('/', listAllNews)
newsRouter.get('/:id', listById)
newsRouter.patch('/6922a821fb23e6eb449dc7670c3dfafe/:id', update)
newsRouter.delete('/6922a821fb23e6eb449dc7670c3dfafe/:id', deleteNews)