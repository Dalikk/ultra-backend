import * as express from 'express';
import * as dotenv from 'dotenv';
import * as path from 'path';

import * as ControllerOne from './controllers/controllerOne';

dotenv.config({ path: path.join(__dirname, '../.env') });

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', ControllerOne.hello);

app.listen(port, () => {
  try {
    // eslint-disable-next-line no-console
    console.log(`Express app started at http://localhost:${port}`);
  } catch (err) {
    console.log('SERVER ERROR');
    console.log(err);
  }
});
