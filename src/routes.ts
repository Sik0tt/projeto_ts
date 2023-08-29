import {Router} from 'express';
import EnderecoController from './app/controllers/EnderecoController';
const router = Router();

//http://localhost:3000/endereco/list
router.get('/endereco/list', EnderecoController.list);

export default router;