const fs = require('fs');
const http = require('http');

// http server -> request and response
const server = http.createServer(
    (req, res) => {
        let d = 'Not found';
        if (req.url == "/") {
            d = fs.readFileSync("pages/home.html", "utf-8");
        } else if (req.url == "/about") {
            d = fs.readFileSync("pages/about.html", "utf-8");
        } else if (req.url == "/gallery") {
            d = fs.readFileSync("pages/gallery.html", "utf-8");
        }
        res.end(d);
    }
)

server.listen(5001, () => { console.log('Server started') });
