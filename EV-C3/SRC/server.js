const app = require('./index');
const connect = require('./configs/db');

app.listen(2300, async() =>{
    try {
        await connect();
        console.log("listing port 2300")
        
    } catch (error) {
        return res.status(500).send(error.message)
    }
})