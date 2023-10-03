import {Router} from 'express';
import EnderecoController from './app/controllers/EnderecoController';
import JogadorController from './app/controllers/JogadorController';
import LocalController from './app/controllers/LocalController';
import ObjetivoController from './app/controllers/ObjetivoController';
import PartidaController from './app/controllers/PartidaController';
import PatenteController from './app/controllers/PatenteController';
import RoundController from './app/controllers/RoundController';
const router = Router();

//http://localhost:3000/endereco/list
router.get('/endereco/list', EnderecoController.list)
router.post('/endereco/store', EnderecoController.store)
router.delete('/endereco/delete', EnderecoController.delete)

//http://localhost:3000/local/list
router.get('/local/list', LocalController.list)
router.post('/local/store', LocalController.store)
router.delete('/local/delete', LocalController.delete)

//http://localhost:3000/jogador/list
router.get('/jogador/list', JogadorController.list)
router.post('/jogador/store', JogadorController.store)

//http://localhost:3000/patente/list
router.get('/patente/list', PatenteController.list)
router.post('/patente/store', PatenteController.store)
router.delete('/patente/delete', PatenteController.delete)

//http://localhost:3000/partida/list
router.get('/partida/list', PartidaController.list)
router.post('/partida/store', PartidaController.store)
router.delete('/patente/delete', PartidaController.delete)

//http://localhost:3000/objetivo/list
router.get('/objetivo/list', ObjetivoController.list)
router.post('/objetivo/store', ObjetivoController.store)
router.delete('/objetivo/delete', ObjetivoController.delete)

//http://localhost:3000/round/list
router.get('/round/list', RoundController.list)
router.post('/round/store', RoundController.store)
router.delete('/round/delete', RoundController.delete)

//http://localhost:3000/loginjogador
router.post('/loginjogador', JogadorController.login);
router.get('/jogador/:nickname', JogadorController.find);
router.delete('/deletejogador/:nickname', JogadorController.delete)


export default router;