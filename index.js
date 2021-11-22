const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');
const { logErrors, boomErrorHandler, errorHandler } = require('./middlewares/error.handler')

const app = express();
const port = 3000;

app.use(express.json());

// const whiteList = ['http://localhost:8080', 'etc'];
// const option = {
//   origin: (origin, callback) => {
//     if (whiteList.includes(origin)){
//       callback(null, true);
//     } else {
//       callback(new Error ('no permitido'));
//     }
//   }
// }
app.use(cors( /* option */ )); // brinda acceso desde cualquier origen

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Mi port' + port);
})
