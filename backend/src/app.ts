import 'dotenv/config';

import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';

import { RouteNotFoundError } from './common/constants/errors';
import { response, db } from './common/helpers';
import routes from './routes.module';

const PORT = process.env.PORT || 3000;

const app: Application = express();

db.connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());
app.use(compression());

app.get('/', (req, res) => {
  response.successResponse(res, 'Hello World');
});

app.use('/api', routes);

app.all('*', (req, res, next) => {
  throw new RouteNotFoundError();
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  response.errorResponse(err, res, req, next);
});

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
