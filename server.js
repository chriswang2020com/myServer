const express = require("express");

const cors = require("cors");

const app = express();

// defines the port express running on
var corsOptions = {
    origin: "http://localhost:8081";
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req,res)) => {
    res.json({message: "testing page is running correctly"})
}

require("./app/routes/myserver.routes.js")(app);

// listening on 8081
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log('server is running on port ${PORT}.');
});

