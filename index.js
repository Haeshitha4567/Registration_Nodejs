const http = require("http");
const fs = require("fs");

let homeContent = "";
let projectContent = "";
let registrationContent = "";

fs.readFile("home.html", (err, home) => {
  if (err) {
    throw err;
  }
  homeContent = home;
});

fs.readFile("Projects.html", (err, Projects) => {
  if (err) {
    throw err;
  }
  projectContent = Projects;
});


fs.readFile("registration.html", (err, registration) => {
    if (err) {
      throw err;
    }
    registrationContent = registration;
  });

http
  .createServer((request, response) => {
    let url = request.url;
    response.writeHeader(200, { "Content-Type": "text/html" });
    switch (url) {
      case "/Projects":
        response.write(projectContent);
        response.end();
        break;
      case  "/registration" :
        response.write(registrationContent);
        response.end();
        break;
      default:
        response.write(homeContent);
        response.end();
        break;
    }
  })
  .listen(5000);