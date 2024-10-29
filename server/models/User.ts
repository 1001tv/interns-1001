import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize";

const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  requiredPackage: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  role: {
    type: DataTypes.ENUM("admin", "user"),
    defaultValue: "user"
  }
});

User.prototype.toJSON = function () {
  const user = this.get();
  delete user.password;
  return user;
};

User.sync();

export default User;
