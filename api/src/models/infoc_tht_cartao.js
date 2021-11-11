import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoc_tht_cartao extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_cartao: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nr_cartao: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nm_cartao: {
<<<<<<< HEAD
      type: DataTypes.STRING(40),
      allowNull: true
    },
    nr_validade: {
      type: DataTypes.INTEGER,
=======
      type: DataTypes.STRING(60),
      allowNull: true
    },
    ds_validade: {
      type: DataTypes.DATEONLY,
>>>>>>> 66847bae39143a122851360c75d687d28f81bbb0
      allowNull: true
    },
    nr_cvv: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nr_parcela: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoc_tht_cartao',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_cartao" },
        ]
      },
    ]
  });
  return infoc_tht_cartao;
  }
}
