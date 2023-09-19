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
       
        const {id} = req.body;
        if(!id){
            const end = repository.create(req.body); //se não for informado o id ele cria um novo
            await repository.save(end);
            return res.json(end);
        }else{
            const find = await repository.findOne({where : {"id" : id }}); //teste se o id existe
        if(find){
            const end = repository.create(req.body); //se existir o id cadastrado ele altera
            await repository.remove(end);
            return res.sendStatus(204);
        }else{ // se for informar o id e não existir no banco não faz nada
            return res.sendStatus(404); //não encontrado para alterar
        } 

        }
        
        
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