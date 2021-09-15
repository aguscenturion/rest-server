const mongoose = require ('mongoose');

const conectarDB = async () => {
    await mongoose.connect('mongodb://localhost/servidordb', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
});
}
conectarDB();

const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log('Database connected');
});