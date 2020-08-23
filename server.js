const express = require("express");
const path = require("path");
const fs = require("fs");
const { json } = require("express");

const app = express();
const PORT = 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.get("/notes", function(request, response) {
    response.sendFile(path.join(__dirname, "notes.html"));
});

app.get("/api/notes", function(req, res) {
    fs.readFile("db/db.json", "utf8", function(error, notesObj) {
        if (error) {
            throw new Error ("File read error");
        }
        notesObj = JSON.parse(notesObj);
        console.log(notesObj);
        // notesObj = JSON.stringify(notesObj)
        res.json(notesObj)
    })
})

// this must be last, as the default action
app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
