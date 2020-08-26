const express = require("express");
const path = require("path");
const fs = require("fs");
const { json } = require("express");

const app = express();
const PORT = 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// serve static assets from the public directory
// this is done so that the html files can link to the js and css files
app.use(express.static('public'));


// serve notes.html at this route
app.get("/notes", function(request, response) {
    response.sendFile(path.join(__dirname, "notes.html"));
});


// handle get requests to the api for notes by reading from db.json
app.get("/api/notes", function(req, res) {
    fs.readFile("db/db.json", "utf8", function(error, notesObj) {
        if (error) {
            console.log(error);
            throw new Error ("File read error");
        }
        notesObj = JSON.parse(notesObj);
        console.log(notesObj);
        // notesObj = JSON.stringify(notesObj)
        res.json(notesObj);
    })
})


// this route must be last, as the default action. Return to index.html for any routes except the ones specified above.
app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});


// allow posting of new notes to the notes api
app.post("/api/notes", function(req, res) {
    // first read from db.json to get the current notes
    fs.readFile("db/db.json", "utf8", function(error, notesArr) {
        if (error) {
            console.log(error);
            throw new Error ("File read error");
        }
        // next parse the notes as an array. Push the new note to the array.
        notesArr = JSON.parse(notesArr);
        notesArr.push(req.body);

        // convert back into a string, and write back to db.json
        notesArr = JSON.stringify(notesArr, null, 2);
        fs.writeFile("db/db.json", notesArr, function(err) {
            if (err) {
                throw err;
            }
        });
    })
    res.json();
})



// last lines of code
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
