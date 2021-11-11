import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infod_tif_chat extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_chat: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
<<<<<<< HEAD
    id_chat_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_chat_mensagem: {
      type: DataTypes.INTEGER,
      allowNull: false
=======
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_comunidade: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ds_mensagem: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    dt_mensagem: {
      type: DataTypes.DATE,
      allowNull: true
>>>>>>> 66847bae39143a122851360c75d687d28f81bbb0
    }
  }, {
    sequelize,
    tableName: 'infod_tif_chat',
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
<<<<<<< HEAD
        name: "id_chat_usuario",
        using: "BTREE",
        fields: [
          { name: "id_chat_usuario" },
        ]
      },
      {
        name: "id_chat_mensagem",
        using: "BTREE",
        fields: [
          { name: "id_chat_mensagem" },
=======
        name: "id_usuario",
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
        ]
      },
      {
        name: "id_comunidade",
        using: "BTREE",
        fields: [
          { name: "id_comunidade" },
>>>>>>> 66847bae39143a122851360c75d687d28f81bbb0
        ]
      },
    ]
  });
  return infod_tif_chat;
  }
}
