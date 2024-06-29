import  mongoose from 'mongoose';

mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://Tone:EcoFlame2023@cluster0.amznsl5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB Conectado.");
}).catch((err) => {
    console.log("Houve um erro: " + err);
});

const UsersSchema = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    sobrenome: {
        type: String,
        required: true
    },
    idade: {
        type: Number,
        required: true
    },
    elo: {
        type: String
    }
});

mongoose.model('Users', UsersSchema);

const User = mongoose.model('Users');

new User({
    nome: "Thomas",
    sobrenome: "SemVergonha",
    idade: 24,
    elo: "imortal"
}).save().then(() => {
    console.log("DEU CERTO");
}).catch((err) => {
    console.log("DEU ERRADO: " + err);
});
