import express from 'express';
const router = express.Router();
import * as cuentasController from '../controllers/cuentas.controller.js';

router.get('/', cuentasController.getCuentaByQuery);

router.get('/:id', cuentasController.getCuentaById);

router.get('/extra/balance', cuentasController.getCuentasBalance);

export default router;

