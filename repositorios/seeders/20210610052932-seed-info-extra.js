module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('InfoExtra', [
			{
				imagem: '../assets/vingadores.jpg',
				filme_id: 1,
			},
			{
				imagem: '../assets/powerRangers.jpg',
				filme_id: 2,
			},
			{
				imagem: '../assets/xmen.jpg',
				filme_id: 3,
			}
	], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('InfoExtra', null, {})
  }
}

