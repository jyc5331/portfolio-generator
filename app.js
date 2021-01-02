//the following line enables the fs module
const fs = require("fs");

//the following line imports our local module using relative pathing. In this case our local module is our generatePage function
const generatePage = require("./src/page-template.js");

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;

//the following actually generates a file. 1st argument: name, 2nd argument: data (content), 3rd argument is error
fs.writeFile("./index.html", generatePage(name, github), (err) => {
  if (err) throw new Error(err);

  console.log("Portfolio complete! Check out index.html to see the output!");
});
