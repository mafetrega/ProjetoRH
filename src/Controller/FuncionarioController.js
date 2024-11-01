const database = require('../database/connection');

class FuncionarioController {
    adicionarHorasExtras(request, response) {
        const { funcionarioId, horas, descricao } = request.body;

        database.insert({ funcionarioId, horas, descricao }).table("horas_extras").then(data => {
            response.json({ message: "Horas extras adicionadas com sucesso" });
        }).catch(error => {
            response.json(error);
        });
    }

    listarHorasExtras(request, response) {
        const funcionarioId = request.params.funcionarioId;

        database.select("*").table("horas_extras").where({ funcionarioId }).then(horasExtras => {
            response.json(horasExtras);
        }).catch(error => {
            response.json(error);
        });
    }

    adicionarBancoHoras(request, response) {
        const { funcionarioId, horas, descricao } = request.body;

        database.insert({ funcionarioId, horas, descricao }).table("banco_horas").then(data => {
            response.json({ message: "Banco de horas adicionado com sucesso" });
        }).catch(error => {
            response.json(error);
        });
    }

    listarBancoHoras(request, response) {
        const funcionarioId = request.params.funcionarioId;

        database.select("*").table("banco_horas").where({ funcionarioId }).then(bancoHoras => {
            response.json(bancoHoras);
        }).catch(error => {
            response.json(error);
        });
    }

    adicionarFerias(request, response) {
        const { funcionarioId, dataInicio, dataFim, dias } = request.body;

        database.insert({ funcionarioId, dataInicio, dataFim, dias }).table("ferias").then(data => {
            response.json({ message: "Férias adicionadas com sucesso" });
        }).catch(error => {
            response.json(error);
        });
    }

    listarFerias(request, response) {
        const funcionarioId = request.params.funcionarioId;

        database.select("*").table("ferias").where({ funcionarioId }).then(ferias => {
            response.json(ferias);
        }).catch(error => {
            response.json(error);
        });
    }
}

module.exports = new FuncionarioController();