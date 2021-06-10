module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Organizacao', [
			{
				titulo: 'Os Vingadores',
				genero: 'Ação, Fantasia',
				duracao: 60,
				dataLancamento: 10/05/2014,
        avaliacao: 'Excelente',
        status: 'Disponível',
			},
			{
				titulo: 'Power Rangers',
				genero: 'Fantasia',
				duracao: 3600,
				dataLancamento: 25/02/2012,
        avaliacao: 'Muto bom',
        status: 'Disponível',
			},
			{
				titulo: 'X-men',
				genero: 'Fantasia, Ação',
				duracao: 70,
				dataLancamento: 12/11/2011,
        avaliacao: 'Bom',
        status: 'Disponível',
			}
	], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Organizacao', null, {})
  }
}

