const multer=require('multer')
const path = require('path')
const imgStorage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'uploads');
    },
    filename:function (req,file,cb){
        const extension = path.extname(file.originalname) ;
        cb(null, Date.now() + extension)
    }
})
const fileFilter = (req, file, cb) => {
    const allowedFileExtensions = ['.pdf']
    const extension = path.extname(file.originalname) ;
    cb(null, allowedFileExtensions.includes(extension));
}
const upload = multer({ storage: imgStorage,fileFilter:fileFilter, limits:{ fileSize:1024*1024*100} })
module.exports=upload