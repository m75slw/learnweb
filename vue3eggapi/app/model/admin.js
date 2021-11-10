module.exports = app=>{
    let {STRING,INTEGER} = app.Sequelize;
    const Admin = app.model.define('admin',{
        id:{type:INTEGER.UNSIGNED,primaryKey:true,autoIncrement:true},
        username:{type:STRING(20),allowNull:false},
        password:{type:STRING(255),allowNull:false},
    },{
        tableName:'admin',
        timestamps:false,
    })
    return Admin;
}