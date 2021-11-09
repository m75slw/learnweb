const Controller = require('egg').Controller;
const path = require('path');
const sendToWormhole = require('stream-wormhole');
const fs=require('fs');

class UploadController extends Controller{
    
    async index(){
        // let{ctx}=this;
        const {ctx} = this;
        //接受文件
        const stream = await ctx.getFileStream();
        try {
            
            // console.dir(stream);
            //移动文件，写流,eg↓
            // let uploaddir='app/public/1.png';
            // const writeStream=fs.createWriteStream(uploaddir);
            // stream.pipe(writeStream);
            //upload/img/20211016/时间戳.后缀
            let basedir='app/public/upload/img/';
            let date=new Date();
            let year=date.getFullYear();
            let month=date.getMonth()+1;
            let date1=date.getDate();

            let timeJoin=''+year+month+date1;
            var uploaddir=basedir+timeJoin;
            // console.log(!fs.existsSync(uploaddir));
            // console.log(uploaddir);
            if(!fs.existsSync(uploaddir)){
                fs.mkdirSync(uploaddir);
            };
            // console.log(!fs.existsSync(uploaddir));
            
            let timestamp=date.getTime();
            
            let randomNumber=Math.round(Math.random()*10);
            // console.log(randomNumber);
            let extname=path.extname(stream.filename);
            // console.log(extname);
            let filename=timestamp+ randomNumber+extname;
            // console.log(filename);
            uploaddir+='/';
            uploaddir+=filename;
            // console.log(uploaddir);

            let urlpath='/public/upload/img/'+timeJoin+'/'+filename;
            // console.log(urlpath);
            const writeStream=fs.createWriteStream(uploaddir);
            stream.pipe(writeStream);
            ctx.body={
                code:1,
                msg:'上传成功',
                url:urlpath
            }
        } catch (err) {
            await sendToWormhole(stream);
            ctx.body={
                code:0,
                msg:'上传失败'
            }
        }
    }
}

module.exports=UploadController;