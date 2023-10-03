import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Jogador from '../models/Jogador';

class JogadorController{

    async find(req: Request, res: Response){
        const repository = getRepository(Jogador);
        const nickname = req.params.nickname;
        const j = await repository.findOne({where : {"nickname" : nickname }});
        if(j){
            //res.sendStatus(201);
            return res.json(j);
        }else{
            return res.sendStatus(204);
        }
    
    }
    async delete(req: Request, res: Response){
        try{
            const repository = getRepository(Jogador);
            const nickname = req.params.nickname;
            const j = await repository.findOne({where : {"nickname" : nickname }});
            if(j){
                await repository.remove(j);
                return res.sendStatus(204);
            }else{
                return res.sendStatus(404);
            }
        }catch(e:unknown){
        
            console.log(e);
            return res.sendStatus(500);
        }

        }


    async login(req: Request, res: Response){
        const repository = getRepository(Jogador);

        const {nickname, senha} = req.body;
        const j = await repository.findOne({where : {"nickname" : nickname, "senha" : senha }});
        if(j){
            //res.sendStatus(201);
            return res.json(j);
        }else{
            return res.sendStatus(204);
        }
    
    

        //const lista = await repository.find();
        //return res.json(lista) 
    }


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
    
}


export default new JogadorController();