module.exports = app =>{
    const { STRING, INTEGER, DATE } = app.Sequelize;
    const courseCate = app.model.define('coursecate', {
        id: { type: INTEGER(10), primaryKey: true, autoIncrement: true },
        catename: {type:STRING(10) ,allowNull:false},
        cateicon:{type:STRING(255),allowNull:false},
        catesort:{type:INTEGER(10),allowNull:true,defaultValue:10},
    },{
        tableName: 'course_cate',
        timestamps: false
    });
    return courseCate;
}