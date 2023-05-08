import * as express from 'express';
import * as dotenv from 'dotenv';
import * as path from 'path';
import * as morgan from 'morgan';

import * as KonturController from './controllers/KonturAPIHandler';

dotenv.config({ path: path.join(__dirname, '../.env') });

const app = express();
const port = 3000;

app.use(express.json());
app.use(morgan('combined'));

app.get('/product/rests', KonturController.products.getProductRests);
// prettier-ignore
app.get('/product/rests/filter', KonturController.products.getFilteredProductRests);
app.get('/product/list', KonturController.products.getAllProducts);

app.listen(port, () => {
  try {
    // eslint-disable-next-line no-console
    console.log(`Express app started at http://localhost:${port}`);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('SERVER ERROR');
    // eslint-disable-next-line no-console
    console.log(err);
  }
});
