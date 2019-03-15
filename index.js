import express  from 'express';
import bodyParser from 'body-parser';
import { Machine, Pod }from './models/schema';

// Start App
const app  = express();
const port = 8000;

// Parse incoming requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Setup Route (traditionally this would be in it's own app dir)
app.get('/api/v1/recommendations', async (req, res, next) => {
    console.log("req: ", req.query);
    const podQuery = Pod.query();
    const machineQuery =  Machine.query();

    if(req.query.machine != ""){
        machineQuery.where({"type": req.query.machine});
    }

    if(req.query.waterline != ""){
        machineQuery.where({"waterline": req.query.waterline});
    }

    if(req.query.flavor != ""){
        podQuery.where({"flavor": req.query.flavor});
    }

    if(req.query.pod != ""){
        podQuery.where({"type": req.query.pod});
    }

    if(req.query.count != ""){
        podQuery.where({"count": req.query.count});
    }

    const results = await Promise.all([podQuery, machineQuery]);
    res.json({pods: results[0], machines: results[1]});

  });

app.listen(port, () => {
  console.log('Swenson He E-comm Test Is Running On: ' + port);
});
