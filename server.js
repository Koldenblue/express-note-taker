const express = require("express");
const path = require("path");
const fs = require("fs");
const { json } = require("express");

const app = express();
let PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// serve static assets from the public directory
// this is done so that the html files can link to the js and css files
app.use(express.static('public'));


// lastId is the greatest id number a note has
let lastId = 0;

// upon server start, set lastId to be the greatest id number
fs.readFile("db/db.json", "utf8", function(error, notesArr) {
    if (error) {
        console.log(error);
        throw new Error ("File read error");
    }
    notesArr = JSON.parse(notesArr);
    for (let note of notesArr) {
        note.id > lastId ? lastId = note.id : null;
    }
});


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
        // console.log(notesObj);
        // notesObj = JSON.stringify(notesObj)
        res.json(notesObj);
    });
});


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
        // next parse the notes as an array
        notesArr = JSON.parse(notesArr);
        // increment lastId, then assign id to the new note. Push the new note to the note array.
        req.body.id = ++lastId;
        notesArr.push(req.body);

        // send response in order to update the notes Push the new note to the array.
        res.json(notesArr);

        // convert the notes array back into a string, and write back to db.json
        notesArr = JSON.stringify(notesArr, null, 2);
        fs.writeFile("db/db.json", notesArr, function(err) {
            if (err) {
                throw err;
            }
        });
    });
});


app.delete("/api/notes/:id", function(req, res) {
    console.log(req.params);
    console.log(req.body);
    res.json();
});

// last lines of code
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
