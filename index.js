const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

let port = process.env.PORT || 3000;

require("./db");
app.use(express.static('public'))
app.use("/api", require("./router/api"))
app.use("/", require("./router/web"))

app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`)
})