const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, addCompliment, deleteCompliment } = require('./controller')


//body
app.get("/api/compliment", getCompliment);
app.post("/api/compliment/:id", addCompliment);
app.delete("/api/compliment/:id", deleteCompliment);





//body

app.listen(4000, () => console.log("Server running on 4000"));
