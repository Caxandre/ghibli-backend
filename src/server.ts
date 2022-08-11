import app from './app';

const HTTP_PORT = 3050

app.listen(HTTP_PORT, () => {
  console.log(`Server started on port ${HTTP_PORT}!`);
});
