const connection = require('../database/connection');

module.exports = {
    async index(request, response){ // listar específicos de uma ONG
        const ong_id = request.headers.authorization;

        const incidents = await connection('incidents').select('*').where('ong_id', ong_id);

        return response.json(incidents);

    }
}