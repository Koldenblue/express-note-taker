# Note Server

![image](https://img.shields.io/badge/license-MIT%20License-green)

## Table of Contents

1. <a href="#description">Description</a>
2. <a href="#usage">Usage</a>
3. <a href="#contributions">Contributions</a>
4. <a href="#license">License</a>
5. <a href="#test">Tests</a>
6. <a href="#questions">Issues and Questions</a>
<hr>
<h3 id='description'>Description</h3>
This app allows a user to store and retrieve notes from a server. Check out the <a href='https://fast-brook-96701.herokuapp.com/'>deployed project website</a> for a demonstration. Click on the pencil icon to write new notes. Click the save icon to save notes, and click the trash bin icon to delete them. Take note - since the app is deployed on a public server, anyone may view, edit, and write notes to the app.

![image](https://user-images.githubusercontent.com/64618290/98511787-229ada80-221a-11eb-86c5-b66abfdb0901.png)

![image](https://user-images.githubusercontent.com/64618290/91626634-bbcd8b00-e965-11ea-89bf-5e3fc2c224f5.png)

The Express framework for the Node.js library was used to code server routes. Notes are stored in json format. Asynchronous javascript functions are used to handle get, post, and delete requests. Asynchronous programming is also used to properly handle reading and writing notes to and from the json file.

This program is simple and functional. The most obvious improvement to the program would be the utilization of a more robust database system for note storage, such as MySQL. Other improvements could be accomplished in the area of front-end design. Scripting improvements such as search, filtering, and ordering functions would be welcome. Nevertheless, the app demonstrates persistent server functionality and straightforward use cases for the Express framework.

<h3 id='usage'>Usage</h3>
Simply click the icons in the deployed application.

<h3 id='contributions'>Contributions</h3>
Contact the author through GitHub or email with suggestions and comments.

<h3 id='license'>License</h3>
This project is licensed under the MIT License.

<h3 id='test'>Tests</h3>
The program may be run using a personal computer as a local host, on port 3000. To do this, Node.js and Node Package Manager should be installed. Then, navigate to the note-server program folder in the terminal. Dependencies listed in the package.json file should be installed with the 'npm install'. Finally, type 'node server.js' to start the server. The app can then be accessed by navigating to 'localhost:3000' in a web browser.

<h3 id='questions'>Issues and Questions</h3>
Issues and questions can be emailed to 'kmillergit' at the domain 'outlook.com'. The author's GitHub profile may be found at https://github.com/Koldenblue.<p><sub><sup>This readme was generated with the help of the readme generator program at https://github.com/Koldenblue/readme-generator.</sup></sub></p>
