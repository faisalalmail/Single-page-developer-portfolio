const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());





app.post('/save', (req, res) => {
    const data = req.body;
    res.sendStatus(200).send("done")
    console.log(req)
    console.log(req.body)
    console.log(JSON.parse(req.body))
  
/*     db.run(
        'INSERT INTO submissions (name, phone, serverTime) VALUES (?, ?, ?)',
        [data.name, data.Phone, data.serverTime],
        function(err) {
            if (err) return res.status(500).send('Database error');
            
        }
    ); */
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});