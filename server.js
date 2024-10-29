const express = require('express');
const fs = require("fs-extra");
const path = require("path");
const authorRoutes = require("./controllers/routes/authorRoutes");

const app = express();
app.use(express.json);

app.use("/api/author", authorRoutes);

const PORT = 5000;
app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`));