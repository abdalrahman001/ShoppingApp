const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Example endpoint
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the Node.js backend!' });
});
app.use((req,res,next)=>{
  res.setHeader('Access Control-Allow-Origin','*')
  res.setHeader('Access Control-Allow-Methods','GET' ,'POST','PUT','DELETE');
  res.setHeader('Access Control-Allow-Headers','Content-Type , Authorization');
  next();
});
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
