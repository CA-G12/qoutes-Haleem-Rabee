const http = require('http');
const PORT = process.env.PORT || 3000;
const HOST_NAME = process.env.HOSTNAME || "localhost";
const router = require("./router");

const server = http.createServer(router);
server.listen(PORT, HOST_NAME,() => {
  console.log(`Server is running at port http://${HOST_NAME}:${PORT}`);
});

