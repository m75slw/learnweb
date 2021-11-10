const crypto=require('crypto');
function setPassword (password){
    let  Signture = crypto.createHmac('sha1', 'wuif2107'); //SecrectKey 秘钥
    Signture.update(password);
    var d = Signture.digest('hex');
    return d.toString(); 
}
module.exports={
    setPassword
};