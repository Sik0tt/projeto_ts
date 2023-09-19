import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Jogador from '../models/Jogador';

class JogadorController{

    async list(req: Request, res: Response){
        const repository = getRepository(Jogador);
        const lista = await repository.find();
        return res.json(lista) 
    }

    
    async store(req: Request, res: Response){

        const repository = getRepository(Jogador);
        console.log(req.body);
        const end = repository.create(req.body);
        await repository.save(end);
        return res.json(end);
    }

    //codigo fonte referente a parate 11.
    async delete(req: Request, res: Response){
        try{
            const repository = getRepository(Jogador);
            const {id} = req.body;
            const end = await repository.findOne({where : {"id" : id }});
            if(end){
                await repository.remove(end);
                return res.sendStatus(204);
            }else{
                return res.sendStatus(404);
            }
        }catch(e:unknown){
        
            console.log(e);
            return res.sendStatus(500);
        }

        }
}


export default new JogadorController();