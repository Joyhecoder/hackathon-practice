'use strict';
const {
    Model
} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class userinfo extends Model {
        static associate(models){
            models.userinfo.hasMany(models.toDo, {foreignKey: "userid"})
        }
    }

    userinfo.init({
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
    }, {
        sequelize,
        modelName: "userinfo"
    });
    return userinfo;
    
}

