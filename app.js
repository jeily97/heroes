const express = require('express');

const app = express();

const path = require('path');

const port = 3030;

app.use(express.static('public'))

app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'views', 'index.html')))
app.get('/babbage', (req,res) => res.sendFile(path.join(__dirname, 'views', 'babbage.html')))
app.get('/Berners-Lee', (req,res) => res.sendFile(path.join(__dirname, 'views', 'Berners-Lee.html')))
app.get('/EdithClarke', (req,res) => res.sendFile(path.join(__dirname, 'views', 'EdithClarke.html')))
app.get('/MargaretHamilton', (req,res) => res.sendFile(path.join(__dirname, 'views', 'MargaretHamilton.html')))

app.listen(port,() => console.log('servidor corriendo en http://localhost:' + port));