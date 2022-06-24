import { Router } from "express";
import { create, deleteNews, listAllNews, listById, update } from "../controllers/news.controller";

export const newsRouter = Router()

newsRouter.post('/', create)
newsRouter.get('/', listAllNews)
newsRouter.get('/:id', listById)
newsRouter.patch('/:id', update)
newsRouter.delete('/:id', deleteNews)