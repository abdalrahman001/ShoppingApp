const express = require('express');
const app = express();
const port = 3000;
const orderRouter= require('./routs/orders')
const authRouter= require('./routs/auth')
const courierRouter= require('./routs/courier')
const packageRouter= require('./routs/packages')

app.use(express.json());

// Example endpoint
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the Node.js backend!' });
});
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
app.use('/auth', authRouter);
app.use('/orders', orderRouter);
app.use('/courier', courierRouter);
app.use('/packages', packageRouter);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

