import { Request, Response } from "express"
import * as PlayerService from "../services/players-service";
import { noContent } from "../utils/http-helper";
import { StatisticsModel } from "../models/statistics-model";

export const getPlayer = async (req: Request, res: Response)=>{
  
  const httpResponse = await PlayerService.getPlayerService();

  res.json(httpResponse.body).status(httpResponse.statusCode)
}

export const getPlayerById = async (req: Request, res: Response) => {
  
  const id = parseInt(req.params.id)
  console.log(id);

  const httpResponse = await PlayerService.getPlayerByIdService(id);

  res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const postPlayer = async (req: Request, res: Response) => {
  const bodyValue = req.body
  const httpResponse = await PlayerService.createPlayerService(bodyValue)

  if(httpResponse){
    res.status(httpResponse.statusCode).json(httpResponse.body)
  } else {
    const response = await noContent()
    res.status(response.statusCode).json(response.body)
  }
}

export const deletePlayer = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const httpResponse = await PlayerService.deletePlayerService(id);
  res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const updatePlayer = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  const bodyValue: StatisticsModel = req.body

  const httpResponse = await PlayerService.updatePlayerService(id,bodyValue)
  res.status(httpResponse.statusCode).json(httpResponse.body)
}