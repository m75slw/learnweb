module.exports = app =>{
    const { STRING, INTEGER, DATE,DECIMAL,Sequelize } = app.Sequelize;
    const course = app.model.define('course', {
        cid: { type: INTEGER(10), primaryKey: true, autoIncrement: true },
        cname: {type:STRING(20) ,allowNull:false},
        cdesc:{type:STRING(255),allowNull:false},
        cthumb:{type:INTEGER(10),allowNull:false},
        cprice:{type:DECIMAL(6, 2),defaultValue:0.00},
        cperiod:{type: INTEGER(10),allowNull:false},
        csales:{type: INTEGER(10),allowNull:false,defaultValue:0},
        cviews:{type:INTEGER(10),allowNull:false,defaultValue:0},
        cevaluate:{type:INTEGER(10),allowNull:false,defaultValue:0},
        cteacher:{type:STRING(10),allowNull:false},
        cteacher_position:{type:STRING(255),allowNull:false},
        cbg:{type:STRING(255),allowNull:false},
        cintroduce:{type:STRING(500),allowNull:false},
        ctime:{type:DATE,defaultValue: Sequelize.NOW},
        id:{type:INTEGER(10),allowNull:false},
    },{
        tableName: 'course',
        timestamps: false
    });
    return course;
}