import express from 'express';

import routes from './routes/index';

const app = express();


app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));


app.use('/api/v1/', routes);

// Welcoming
app.get('/', (req, res) => {
  res.send('Politico App');
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('ENDPOINT NOT FOUND');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    status: err.status,
    message: err.message
  });
});

export default app;