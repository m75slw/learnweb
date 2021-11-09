module.exports = app =>{
    const { STRING, INTEGER, DATE } = app.Sequelize;
    const Chapter = app.model.define('chapter', {
        chid: { type: INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true },
        chname: {type:STRING(50) ,allowNull:false},
        chduration:{type:INTEGER,allowNull:false},
        chvideo:{type:STRING,allowNull:false},
        cid:{type:INTEGER,allowNull:false},
    },{
        tableName: 'chapter',
        timestamps: false
    });
    return Chapter;
}