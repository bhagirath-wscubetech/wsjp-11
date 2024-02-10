const http = require('http');
const url = require('url');
const { writeFileSync, readFileSync } = require('fs');

const server = http.createServer(
    (req, res) => {
        res.setHeader("Access-Control-Allow-Origin", '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        const parseUrl = url.parse(req.url, true);
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
                    data.id = new Date().getTime();
                    const currentData = readFileSync("data/user.json", "utf-8");
                    const currentArr = JSON.parse(currentData);
                    currentArr.push(data);
                    writeFileSync("data/user.json", JSON.stringify(currentArr));
                    res.end("user added");
                }
            )

        } else if (req.method == "GET" && parseUrl.pathname == "/get-users") {
            const dataJson = readFileSync("data/user.json", 'utf-8');
            const data = JSON.parse(dataJson);
            const response = {
                status: 1,
                data
            }
            res.end(JSON.stringify(response));

        } else if (req.method == "DELETE" && parseUrl.pathname == "/delete-user") {
            const userId = parseUrl.query.id;
            const dataJson = readFileSync("data/user.json", "utf-8");
            const data = JSON.parse(dataJson);
            const newData = data.filter(user => user.id != userId);
            writeFileSync("data/user.json", JSON.stringify(newData));
            res.end("User deleted");

        } else if (req.method == "PUT" && parseUrl.pathname == "/update-user") {
            const userId = parseUrl.query.id;
            const currentDataJson = readFileSync("data/user.json", "utf-8");
            const currentData = JSON.parse(currentDataJson);
            req.on(
                "data",
                (chunk) => {
                    const jsonData = chunk.toString();
                    const data = JSON.parse(jsonData);
                    const updateData = currentData.map(
                        (u) => {
                            if (u.id == userId) {
                                return data;
                            } else {
                                return u;
                            }
                        }
                    )
                    writeFileSync("data/user.json", JSON.stringify(updateData));
                    res.end("Data updated");
                }
            )

        } else {
            res.end("Kuch bhi");
        }
    }
)

server.listen(5000, () => console.log('server chalu ho gaya'));

