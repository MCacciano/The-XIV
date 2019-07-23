const { DataSource } = require('apollo-datasource');

class MongoDB extends DataSource {
  constructor() {
    super();
  }
}

module.exports = MongoDB;
