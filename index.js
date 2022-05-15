const express = require('express'),
    ping = require("ping");
const app = express();
const port = 3000;

app.get('/ping/:ip', (req, res) => {
    (async function() {
        const result = await ping.promise.probe(req.params.ip, {
            timeout: 10,
            extra: ["-i", "1", "-w", "1"],
        });
        res.setHeader("Content-Type", "application/json");
        res.send(JSON.stringify(result));
    })();
});

app.listen(port, () => {
    console.log("now listening on " + port);
});