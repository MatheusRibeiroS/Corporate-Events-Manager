import app from './index';

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`[Auth Server] Listening on port ${port}`);
});
