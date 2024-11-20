const http = require('http');
const fs = require("fs")
const port = 7585;
const requrestHandler = (request, response) => {
    let filePath = ""
    switch (request.url) {
        case "/":
            filePath = "./index.html"
            break;
        case "/about":
            filePath = "./about.html"
            break;
        case "/product":
            filePath = "./product.html"
            break;
        case "/contact":
            filePath = "./contact.html"
            break;
        default:
            filePath = "./error.html"
            break;

    }
    let fileData = fs.readFileSync(filePath);
    response.end(fileData);
}
const server = http.createServer(requrestHandler);

server.listen(port, (err) => {
    if (err) {
        console.log("Server is not start");
        return false;
    }
    console.log(`Your server start on http://localhost:${port}`);
});





