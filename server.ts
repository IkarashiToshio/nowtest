import * as http from "http";

const PORT = 8000;

http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain;charset=utf-8" });
  res.end("now test for typescript");
}).listen(PORT);

console.log(`Server running at ${PORT}`);
