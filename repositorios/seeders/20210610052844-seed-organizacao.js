module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Organizacaos', [
			{
				titulo: 'Os Vingadores',
				genero: 'Ação, Fantasia',
				duracao: 60,
				dataLancamento: 10/05/2014,
				avaliacao: 'Excelente',
				descricao: 'Reunião de vários heróis da Marvel',
				status: 'Disponível',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				titulo: 'Power Rangers',
				genero: 'Fantasia',
				duracao: 3600,
				dataLancamento: 25/02/2012,
				avaliacao: 'Muto bom',
				descricao: 'Reunião de vários heróis de cores diferentes',
				status: 'Disponível',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				titulo: 'X-men',
				genero: 'Fantasia, Ação',
				duracao: 70,
				dataLancamento: 12/11/2011,
				avaliacao: 'Bom',
				descricao: 'Reunião de vários mutantes',
				status: 'Disponível',
				createdAt: new Date(),
				updatedAt: new Date()
			}
	], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Organizacaos', null, {})
  }
}

