'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Organizacao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Organizacao.init({
    titulo: DataTypes.STRING,
    genero: DataTypes.STRING,
    duracao: DataTypes.INTEGER,
    dataLancamento: DataTypes.DATEONLY,
    avaliacao: DataTypes.STRING,
    descricao: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Organizacao',
  });
  return Organizacao;
};