'use-strict'

const app = require('../CardAppio.Api/bin/express');
const variables = require('../CardAppio.Api/bin/configuration/variables');

app.listen(variables.Api.port, () => {
    console.info(`Api iniciado na porta ${variables.Api.port}`);
});