const express = require("express"); 
const Mongoose = require("mongoose"); 
const logger = require("morgan"); 


const PORT = process.env.PORT || 3002;
const app = express();

app.use(logger("dev"));


app.use(express.urlencoded({extended: true})); 
app.use(express.json());

app.use(express.static("public")); 

app.use(require("./routes/htmlRoutes")); 
app.use(require("./routes/apiRoutes")); 


Mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/workout",  
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
); 





app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}!`);
  });3