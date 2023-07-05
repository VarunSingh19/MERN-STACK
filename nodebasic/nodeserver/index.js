const http = require('http'); // Import the built-in 'http' module for creating HTTP servers
const fs = require('fs'); // Import the built-in 'fs' module for file system operations
const path = require('path'); // Import the built-in 'path' module for working with file paths
const hostname = "localhost"; // Set the hostname for the server
const port = 3000; // Set the port number for the server


const server = http.createServer((req, res) => {
    // Callback function executed when a request is received by the server
    console.log(req.url + " by this method " + req.method); // Log the URL and HTTP method of the incoming request
    if(req.method == 'GET') {
        // Handle GET requests
        var fileurl;
        if (req.url == '/') {
            fileurl = 'index.html'; // If the requested URL is '/', set fileurl to 'index.html'
        } else {
            fileurl = req.url; // Otherwise, set fileurl to the requested URL
        }
        var filepath = path.resolve('./public' + fileurl); // Resolve the file path by appending './public' to the fileurl
        const fileExt = path.extname(filepath); // Extract the file extension from the resolved file path
        if (fileExt == '.html') {
            // If the file extension is '.html'
            fs.exists(filepath, (exists) => {
                // Check if the file exists
                if (!exists) {
                    // If the file does not exist, send a 404 response with an error message
                    res.statusCode = 404;
                    res.setHeader('Content-Type', 'text/html');
                    res.end('<html><body><h1>Error 404: ' + fileurl + ' does not exist</h1></body></html>');
                }
                // If the file exists, set the response status code to 200, content type to 'text/html',
                // and send the file contents to the client
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                fs.createReadStream(filepath).pipe(res);
            });
        } else {
            // If the file extension is not '.html', send a 404 response with an error message
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.end('<html><body><h1>Error 404: ' + fileurl + ' is not an HTML file</h1></body></html>');
        }
    } else {
        // Handle requests other than GET (e.g., POST, PUT, DELETE)
        // Send a 404 response with an error message
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end('<html><body><h1>Error 404: ' + req.url + ' not supported</h1></body></html>');
    }
});
server.listen(port, hostname, () => {
    // Start the server and listen for incoming requests
    console.log(`Server running at http://${hostname}:${port}`);
});