const app = require('./index')
const connect = require('./configs/db')

app.listen(2500,async()=>{
    try {
        await connect();
    } catch (error) {
        console.log('error: ', error);
        
    }
    console.log("Listening Port 2500")
})