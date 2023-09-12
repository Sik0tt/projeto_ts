import {Router} from 'express';
import EnderecoController from './app/controllers/EnderecoController';
import LocalController from './app/controllers/LocalController';
const router = Router();

//http://localhost:3000/endereco/list
router.get('/endereco/list', EnderecoController.list)
router.post('/endereco/store', EnderecoController.store)
router.delete('/endereco/delete', EnderecoController.delete)

//http://localhost:3000/local/list
router.get('/local/list', LocalController.list)
router.post('/local/store', LocalController.store)
router.delete('/local/delete', LocalController.delete)

export default router;