module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        title: DataTypes.STRING,
        description: DataTypes.STRING,
        author_id: DataTypes.INTEGER,
    })

    return Category
}