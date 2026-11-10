import express from 'express';
const app = express();
function timestamp(req, res) {
 const input = req.params.date;
 const date = input === undefined ? new Date() : new Date(/^-?\d+$/.test(input) ? Number(input) : input);
 if (Number.isNaN(date.getTime())) return res.json({error:'Invalid Date'});
 res.json({unix:date.getTime(),utc:date.toUTCString()});
}
app.get('/api',timestamp);
app.get('/api/:date',timestamp);
app.listen(8000);
