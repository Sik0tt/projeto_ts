import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Endereco from '../models/Endereco';

class EnderecoController{

    async list(req: Request, res: Response){
        const repository = getRepository(Endereco);
        const lista = await repository.find(); //find está econtrando tudo que tem dentro do repository Endereco -> await aguarda o retorno do find para depois processar os dados da lista
        return res.json(lista);
    }
}

export default new EnderecoController;

//await garante que os dados do bd sejam processados antes do processo da lista