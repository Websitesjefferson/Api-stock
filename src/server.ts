import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors';
import routes from './routes';
import path from 'path'
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(routes);

app.use(
  '/files',
  express.static(path.resolve(__dirname, '..', 'tmp'))
)
app.use((err: Error, _req: Request, res: Response, next: NextFunction) => {
  if(err instanceof Error){
    //Se for uma instancia do tipo error
    return res.status(400).json({
      error: err.message
    })
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error.'
  })

})

app.listen(PORT, () => {
  console.log(`Servidor está rodando em http://localhost:${PORT}`);
});
