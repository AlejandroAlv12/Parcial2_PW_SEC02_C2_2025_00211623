import express from 'express';
//const express = require('express');
const app = express();
import cuentasRoutes from './routes/cuentas.routes.js';

const PORT = 3130;

app.use(express.json());

app.use('/cuentas', cuentasRoutes);
app.use('/cuenta', cuentasRoutes);

app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
