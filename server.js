const express = require('express');
const fs = require("fs-extra");
const path = require("path");

const app = express();
app.use(express.json);

const PORT = 5000;
app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`));