import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoc_tht_chat extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_mensagem: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nm_nome: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ds_mensagem: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
<<<<<<< HEAD
    dt_messagem: {
=======
    dt_mensagem: {
>>>>>>> 66847bae39143a122851360c75d687d28f81bbb0
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoc_tht_chat',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_mensagem" },
        ]
      },
    ]
  });
  return infoc_tht_chat;
  }
}
