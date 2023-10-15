const io = require('socket.io')(5173)

io.on("connection", (mess) => {
    console.log(mess.id);
})