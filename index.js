const express = require('express')
const app = express()
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.use('/api', createProxyMiddleware({ target: 'https://nextjs-orpin-omega-98.vercel.app', changeOrigin: true }));

app.listen(port, () => {
  console.log(`Restaurants List App Listening on Port ${port}`)
});