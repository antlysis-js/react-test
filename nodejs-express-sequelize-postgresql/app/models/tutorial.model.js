module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("tutorial", {
    title: {
      type: Sequelize.DataTypes.STRING
    },
    description: {
      type: Sequelize.DataTypes.STRING
    },
    published: {
      type: Sequelize.DataTypes.BOOLEAN
    }
  },{
    tableName: "tutorial"
  
    });
return Tutorial;
  };