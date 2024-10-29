import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize";

const Show = sequelize.define("Show", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  name: DataTypes.STRING,
  landscapeImage: DataTypes.STRING,
  portraitImage: DataTypes.STRING,
  bannerImage: DataTypes.STRING,
  // Arrays only supported with PostgreSQL
  genres: {
    type: DataTypes.TEXT,
    get() {
      const genres = this.getDataValue("genres");
      return genres ? JSON.parse(genres) : [];
    },
    set(value) {
      this.setDataValue("genres", JSON.stringify(value));
    }
  },
  rating: DataTypes.ENUM("G", "PG", "PG-13", "PG-15", "R", "NC-17", "+15"),
  directors: {
    type: DataTypes.TEXT,
    get() {
      const directors = this.getDataValue("directors");
      return directors ? JSON.parse(directors) : [];
    },
    set(value) {
      this.setDataValue("directors", JSON.stringify(value));
    }
  },
  year: DataTypes.INTEGER,
  duration: DataTypes.STRING,
  describtion: DataTypes.STRING,
  long_description: DataTypes.TEXT,
  isOriginal: DataTypes.BOOLEAN,
  sectionTitle: DataTypes.STRING,
  required_package: DataTypes.INTEGER
});

// Show.sync();

export default Show;
