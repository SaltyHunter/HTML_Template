const express = require("express")
const app = express()

// use the express-static middleware
app.use(express.static("./src"))

// define the first route
app.get("/", function (req, res) {
    res.sendFile(`index.html`, {root: `src`});
})

// start the server listening for requests
app.listen(process.env.PORT || 8080, 
	() => console.log("Server is running..."));