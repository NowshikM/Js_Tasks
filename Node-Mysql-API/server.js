const app = require("express")();
// const app = express();
app.use(express.json());  /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));   /* bodyParser.urlencoded() is deprecated */

const db = require("./app/models");

db.sequelize.sync();

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Calibraint Employees Database Sample." });
});

require("./app/routes/employee.routes")(app);


app.listen(4000, () => {
  console.log(`Server is Started.`);
});
