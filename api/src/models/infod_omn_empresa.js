import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infod_omn_empresa extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_empresa: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nm_empresa: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_senha: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_cnpj: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_localidade: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_area_atuacao: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_porte: {
      type: DataTypes.STRING(255),
      allowNull: true
<<<<<<< HEAD
=======
    },
    ds_imagem: {
      type: DataTypes.STRING(255),
      allowNull: true
>>>>>>> 66847bae39143a122851360c75d687d28f81bbb0
    }
  }, {
    sequelize,
    tableName: 'infod_omn_empresa',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_empresa" },
        ]
      },
    ]
  });
  return infod_omn_empresa;
  }
}
