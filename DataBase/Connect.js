const mongoose=require('mongoose');

mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useUnifiedTopology: true   
}).then(()=> {
    console.log('DataBase Connected')
}).catch(error=> {
    console.log('error connecting to database')
});