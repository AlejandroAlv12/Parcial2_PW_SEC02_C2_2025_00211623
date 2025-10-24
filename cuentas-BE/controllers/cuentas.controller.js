import cuentas from '../data/cuentas.js';

export const getAllCuentas = (req, res) => {
  res.json({
    count: cuentas.length,
    data: cuentas
  });
};

export const getCuentaById = (req, res) => {
  const id = req.params.id;
  const cuenta = cuentas.find(c => c._id === id);

  if (cuenta) {
    res.json({ finded: true, account: cuenta });
  } else {
    res.json({ finded: false });
  }
};

export const getCuentaByQuery = (req, res) => {
  const query = req.query.queryParam;
  const isActiveFilter = req.query.isActive;

  let resultados = cuentas;

  if (isActiveFilter !== undefined) {
    const isActiveBool = isActiveFilter === 'true';
    resultados = resultados.filter(c => c.isActive === isActiveBool);
  }

  if (query) {
    resultados = resultados.filter(c =>
      c._id === query ||
      c.client.toLowerCase().includes(query.toLowerCase()) ||
      c.gender.toLowerCase() === query.toLowerCase()
    ); 
  }

  if (resultados.length === 0) {
    res.json({ finded: false });
  } else if (resultados.length === 1) {
    res.json({ finded: true, account: resultados[0] });
  } else {
    res.json({ finded: true, data: resultados });
  }
};


export const getCuentasBalance = (req, res) => {
  const balances = cuentas.map(c => ({
    client: c.client,
    balance: c.balance
  }));

  res.json({ count: balances.length, data: balances });
};
