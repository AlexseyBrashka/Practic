const mysql = require('mysql2');
const express = require('express');
const fs = require('fs');
const app = express();
const path = require('node:path');
app.set('view engine', 'ejs');
app.use(express.static('static'));

const bodyParser = require('body-parser');

app.use(express.urlencoded({ extended: false }))
app.use(express.json());

app.use(bodyParser.json())
 content = [
    {word:'Котик', data:'https://gas-kvas.com/grafic/uploads/posts/2023-09/1695822864_gas-kvas-com-p-kartinki-milie-kotiki-8.jpg'},
    {word:'Собачка', data:'https://kupipet.ru/upload/iblock/379/37952b4d59b15f9d6b241879918e34a6.jpeg'},
    {word:'Зайчик', data:'https://www.funnyart.club/uploads/posts/2022-12/1671317663_www-funnyart-club-p-kartinki-milogo-zaichika-krasivo-7.jpg'}
]
function findByWord(word1){
    word1= word1.toLowerCase()
    word1= word1.trim()
    word2 = word1
    for (i=0;i<content.length;i++)
        if (content[i].word.toLowerCase() == word1){
            result = JSON.stringify(content[i])
            return result
    };
    let res = {word:'false'}
    return JSON.stringify(res)
}

app.post('/', (req, res) => {
    file = findByWord(req.body.info)
    res.end(file);
});


app.use('/', (req, res) =>{
    res.render("index",content)
})
const PORT = 8080





app.listen(PORT,()=>{
    console.log(`I am alive at http://localhost:${PORT}`)


})


