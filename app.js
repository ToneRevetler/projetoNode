import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(express.static('public'));


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.set('view engine', 'ejs');

app.get('/', (req,res)=>{    
    // res.sendFile(__dirname + "/html/index.html");
    res.render("index");
});
    
app.get('/bruno', (req,res)=>{    
    res.send("GAY")
});

app.get('/bruno/:nome', (req,res)=>{    
    res.send(" O CARA DA URL É MUITO GAY")
});

app.listen(3333);