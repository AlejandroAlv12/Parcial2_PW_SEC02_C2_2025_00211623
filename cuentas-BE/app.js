import express from 'express';
//const express = require('express');
const app = express();
const cuentasRoutes = require('./routes/cuentas.routes');

const PORT = 3130;

app.use(express.json());

app.use('/cuentas', cuentasRoutes);
app.use('/cuenta', cuentasRoutes);

app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
