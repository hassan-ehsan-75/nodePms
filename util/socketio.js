let io;

module.exports={
    init : httpServer=>{
        io=require('socket.io')(httpServer);
    },
    getIO:()=>{
        if (!io){
            throw new Error('socket not initiated');
        }else {
            return io;
        }
    }
}