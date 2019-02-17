module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
        description: DataTypes.STRING,
        post_id: DataTypes.INTEGER,
        author_id: DataTypes.INTEGER,
    })

    return Comment
}