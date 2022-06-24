import { Router } from "express";
import { newsRouter } from "./news.routes";

export const routes = Router()

routes.use('/api/news', newsRouter)