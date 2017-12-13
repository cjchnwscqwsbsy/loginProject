/**
 * Created by xrk on 17-12-11.
 */
const express = require('express');
const app = express();
const router = express.Router();

app.get('/', (req, res) => {
    res.send({
        result: true
    })
});

app.post('/posy/', function(req, res) {
    res.send({
        callBack: {
            result: false
        }
    })
});

const server = app.listen(8081, () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log("fangwen", host, port);
});