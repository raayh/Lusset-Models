import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoc_tct_endereco extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_endereco: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ds_cep: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    ds_estado: {
<<<<<<< HEAD
      type: DataTypes.STRING(20),
      allowNull: true
    },
    nm_cidade: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    nm_rua: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    ds_numero: {
      type: DataTypes.STRING(5),
=======
      type: DataTypes.STRING(50),
      allowNull: true
    },
    nm_cidade: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    nm_rua: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ds_numero: {
      type: DataTypes.STRING(10),
>>>>>>> 66847bae39143a122851360c75d687d28f81bbb0
      allowNull: true
    },
    ds_complemento: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    nm_ponto_referencia: {
<<<<<<< HEAD
      type: DataTypes.STRING(40),
=======
      type: DataTypes.STRING(100),
>>>>>>> 66847bae39143a122851360c75d687d28f81bbb0
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoc_tct_endereco',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_endereco" },
        ]
      },
    ]
  });
  return infoc_tct_endereco;
  }
}
