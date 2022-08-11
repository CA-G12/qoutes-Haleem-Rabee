const http = require('http');
const router = require('./router');
const server = http.createServer(router);
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`SERVER IS WORKING ON PORT ${PORT} Ready to accept requests! `);
});
