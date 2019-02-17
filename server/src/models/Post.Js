module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
        title: DataTypes.STRING,
        description: DataTypes.STRING,
        category_id: DataTypes.INTEGER,
        status_id: DataTypes.INTEGER,
        author_id: DataTypes.INTEGER,
    })

    return Post
}