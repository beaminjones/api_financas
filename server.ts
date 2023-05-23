import express, { Request, Response} from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import Router from './src/router/router';

dotenv.config();

const app = express();

app.use(cors());

app.use('/', Router);

app.use((req: Request, res:Response) => {
    return res.status(404).json({
        error: true, 
        message: 'Endpoint não encontrado, por favor verifique a rota'
    });
})

app.listen(process.env.PORT);