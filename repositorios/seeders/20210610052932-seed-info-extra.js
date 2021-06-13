module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('InfoExtras', [
			{
				imagem: '../assets/vingadores.jpg',
				filme_id: 1,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				imagem: '../assets/powerRangers.jpg',
				filme_id: 2,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				imagem: '../assets/xmen.jpg',
				filme_id: 3,
				createdAt: new Date(),
				updatedAt: new Date()
			}
	], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('InfoExtras', null, {})
  }
}

