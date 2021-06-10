'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class InfoExtra extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      InfoExtra.belongsTo(models.Organizacao, {
          foreignKey: 'filme_id'
        })
    }
  };

  InfoExtra.init({
    imagem: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'InfoExtra',
  });
  return InfoExtra;
};