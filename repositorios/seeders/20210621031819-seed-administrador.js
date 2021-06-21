module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Administradors', [
			{
        user: 'rugal',
        email: 'rugal@unifesspa.edu.br',
        senha: '1234321',
				createdAt: new Date(),
				updatedAt: new Date()
			}
	], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Administradors', null, {})
  }
}

