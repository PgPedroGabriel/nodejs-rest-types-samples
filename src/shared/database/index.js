import Sequelize from 'sequelize';
import postgresconfig from '../configs/postgres';
import Banner from '../models/Banner';
import Product from '../models/Product';
import Category from '../models/Category';

const models = [Banner, Product, Category];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(postgresconfig);
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
