import express from 'express';
import path from 'path';

const app = express();
const dirname = path.resolve();
const join = path.join;

const PORT = 3030;

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log('Servidor corriendo en el puerto ' + PORT);
});

app.get('/', (req,res) => {
    res.sendFile(join(dirname, '/views/home.html'));
});
app.get('/register', (req,res) => {
    res.sendFile(join(dirname, '/views/register.html'));
});
app.get('/login', (req,res) => {
    res.sendFile(join(dirname, '/views/login.html'));
});

