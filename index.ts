import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Hello!');
});

app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
});

