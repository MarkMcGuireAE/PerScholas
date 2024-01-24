const express = require("express");
const app = express();
const pokemons = require("./models/pokemon");
const PORT = 3000;

//load engine
const jsxEngine = require("jsx-view-engine");

//setup engine
app.set("view engine", "jsx")
app.engine('jsx', jsxEngine())


app.get("/",(req, res)=>{
    res.send("Welcome to Pokemon APP!!!");
})

app.get("/pokemon", (req,res)=>{
    res.render("Index", {pokemon: pokemons});
})

app.get("/pokemon/:index", (req,res)=>{
    res.render("Show", {pokemon: pokemons[req.params.index]});
})

app.listen(PORT, (req,res)=>{
    console.log(`listening on Port:${PORT}`);

})
