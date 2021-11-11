import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoc_tht_usuario extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_usuario: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
<<<<<<< HEAD
=======
    id_login: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infoc_tht_login',
        key: 'id_login'
      }
    },
>>>>>>> 66847bae39143a122851360c75d687d28f81bbb0
    id_cartao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infoc_tht_cartao',
        key: 'id_cartao'
      }
    },
<<<<<<< HEAD
    nm_usuraio: {
=======
    nm_usuario: {
>>>>>>> 66847bae39143a122851360c75d687d28f81bbb0
      type: DataTypes.STRING(30),
      allowNull: true
    },
    ds_email: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
<<<<<<< HEAD
    nr_cpf: {
=======
    nr_celular: {
>>>>>>> 66847bae39143a122851360c75d687d28f81bbb0
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dt_nascimento: {
<<<<<<< HEAD
      type: DataTypes.DATE,
      allowNull: true
    },
    ds_senha: {
      type: DataTypes.INTEGER,
=======
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ds_senha: {
      type: DataTypes.STRING(255),
>>>>>>> 66847bae39143a122851360c75d687d28f81bbb0
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoc_tht_usuario',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
        ]
      },
      {
<<<<<<< HEAD
=======
        name: "id_login",
        using: "BTREE",
        fields: [
          { name: "id_login" },
        ]
      },
      {
>>>>>>> 66847bae39143a122851360c75d687d28f81bbb0
        name: "id_cartao",
        using: "BTREE",
        fields: [
          { name: "id_cartao" },
        ]
      },
    ]
  });
  return infoc_tht_usuario;
  }
}
