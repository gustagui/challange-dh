module.exports = (sequelize, DataType) => {
    const Formulario = sequelize.define('Formulario', {
        name:DataType.STRING,
        email:DataType.STRING,
        message:DataType.STRING,
    },{
        tableName: 'form',
        timestamps: false
    })
    return Formulario
}