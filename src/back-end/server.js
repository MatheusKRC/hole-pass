import app from './app.js';

const port = process.env.PORT || 3003;
app.listen(port);
console.log(`Api rodando na porta ${port}`);
