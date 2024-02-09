const http = require('http');
const url = require('url');
const { writeFileSync, readFileSync } = require('fs');

const server = http.createServer(
    (req, res) => {
        // console.log(req.url);
        const parseUrl = url.parse(req.url, true);
        console.log(req.method, parseUrl);
        if (req.method == "GET" && parseUrl.pathname == "/create-file") {
            if (parseUrl.query.file_name == undefined) {
                res.end("Bhaia file ka name to do!");
            } else {
                writeFileSync(`data/${parseUrl.query.file_name}`, "[]");
                res.end("Didi file bann gai");
            }
        } else if (req.method == "POST" && parseUrl.pathname == "/add-user") {
            req.on(
                "data",
                (chunk) => {
                    const jsonData = chunk.toString();
                    const data = JSON.parse(jsonData);
                    const currentData = readFileSync("data/user.json", "utf-8");
                    const currentArr = JSON.parse(currentData);
                    currentArr.push(data);
                    writeFileSync("data/user.json", JSON.stringify(currentArr));
                    res.end("user added");
                }
            )
        } else {
            res.end("Kuch bhi");
        }
    }
)

server.listen(5000, () => console.log('server chalu ho gaya'));