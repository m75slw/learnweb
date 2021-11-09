module.exports = app=>{
    const {STRING,INTEGER,TEXT}=app.Sequelize;
    const collect= app.model.define('',{
        id:{type:INTEGER(11).UNSIGNED,primaryKey:true,autoIncrement:true},
        uid:{type:INTEGER(11),allowNull:false},
        cid:{type:TEXT('long')}
    },{
        tableName: 'collect',
        timestamps: false
    });
    return collect;
}