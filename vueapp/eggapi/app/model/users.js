module.exports = app=>{
    let {STRING,INTEGER,DATE} = app.Sequelize;
    const Users = app.model.define('user',{
        uid:{type:INTEGER.UNSIGNED,primaryKey:true,autoIncrement:true},
        nickname:{type:STRING(50),allowNull:false},
        avatar:{type:STRING,allowNull:false,defaultValue:'/public/avatar.png'},
        phone:{type:STRING(20),allowNull:false,unique:true},
        password:{type:STRING,allowNull:false},
        sign:{type:STRING(30)},
        fans:{type:INTEGER,defaultValue:23},
        follow:{type:INTEGER,defaultValue:23},
        create_at:{type:DATE},
        update_at:{type:DATE},

    },{
        tableName:'users',
        timestamps:true,
        createdAt:'create_at',
        updatedAt:'update_at',
    })
    return Users;
}