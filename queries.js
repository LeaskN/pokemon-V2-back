const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'postgres',
  host: 'react-crud.cnuypb0q01wm.us-east-1.rds.amazonaws.com',
  database: 'pokemon',
  password: 'testpass',
  port:'5432'
});

const getAllPokemon = (request, response) => {
  pool.query('SELECT * FROM pokemon', (error, results) => {
    if(error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

module.exports = {
  getAllPokemon
}