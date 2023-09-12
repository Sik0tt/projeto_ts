import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Endereco from '../models/Endereco';

class EnderecoController{

    async list(req: Request, res: Response){
        const repository = getRepository(Endereco);
        const lista = await repository.find(); //find está econtrando tudo que tem dentro do repository Endereco -> await aguarda o retorno do find para depois processar os dados da lista
        return res.json(lista);
    }

    
    async store(req: Request, res: Response){

        const repository = getRepository(Endereco);//recupera o repositorio de Endereço
        console.log(req.body);
        const end = repository.create(req.body);
        await repository.save(end);
        return res.json(end);
    }

    //codigo fonte referente a parate 11.
    async delete(req: Request, res: Response){
        try{
            const repository = getRepository(Endereco);
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





export default new EnderecoController;

//await garante que os dados do bd sejam processados antes do processo da lista