import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoc_tct_chat extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_chat: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_cliente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infoc_tct_cliente',
        key: 'id_cliente'
      }
    },
    id_administrador: {
      type: DataTypes.INTEGER,
<<<<<<< HEAD
      allowNull: true,
      references: {
        model: 'infoc_tct_administrador',
        key: 'id_administrador'
      }
=======
      allowNull: true
>>>>>>> 66847bae39143a122851360c75d687d28f81bbb0
    },
    ds_mensagem: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    dt_mensagem: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoc_tct_chat',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_chat" },
        ]
      },
      {
        name: "id_cliente",
        using: "BTREE",
        fields: [
          { name: "id_cliente" },
        ]
      },
<<<<<<< HEAD
      {
        name: "id_administrador",
        using: "BTREE",
        fields: [
          { name: "id_administrador" },
        ]
      },
=======
>>>>>>> 66847bae39143a122851360c75d687d28f81bbb0
    ]
  });
  return infoc_tct_chat;
  }
}
