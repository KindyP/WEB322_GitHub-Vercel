const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {

  const studentName = "Kindy Paito"; 
  const currentGMT = new Date().toISOString();
  
  res.send(`${studentName} - WEB322 ${currentGMT}`);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;