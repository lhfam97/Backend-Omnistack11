const express = require("express");
const routes = require("./routes");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
/*
Driver: Select * from users
Query Builder: table('users').select('*').where()


*/

app.use(routes);

app.listen(3333);
