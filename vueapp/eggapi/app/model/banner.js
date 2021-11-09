module.exports = app =>{
    const { STRING, INTEGER, DATE,DECIMAL,Sequelize } = app.Sequelize;
    const banner = app.model.define('banner', {
        bid:{type: INTEGER(11), primaryKey: true, autoIncrement: true},
        bthumb:{type:STRING(255),allowNull:false},
    },{
        tableName: 'banner',
        timestamps: false
    });
    return banner;
}