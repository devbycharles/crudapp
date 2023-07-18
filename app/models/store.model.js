module.exports = (sequelize, Sequelize) => {
  const Store = sequelize.define("store", {
    name: {
      type: Sequelize.STRING
    },
    profession: {
      type: Sequelize.STRING
    },
    age: {
      type: Sequelize.STRING
    },
    birth: {
      type: Sequelize.STRING
    },
    privacy: {
      type: Sequelize.BOOLEAN
    }
  });

  return Store;
};