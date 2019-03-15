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
    if(Object.keys(req.query).length < 5){
        res.status(400).json("Missing query params (machine, waterline, flavor, count, pod)");
    } else {
        console.log("req: ", req.query);
        const query= req.query;
        console.log("query: ", query)
    
        const { machine, waterline, flavor, count, pod } = query;
    
        const podQuery = Pod.query();
        const machineQuery =  Machine.query();
    
        if(machine !== undefined ){
            machineQuery.where({"type": req.query.machine});
        }
    
        if(waterline !== ""){
            machineQuery.where({"waterline": req.query.waterline});
        }
    
        if(flavor !== ""){
            podQuery.where({"flavor": req.query.flavor});
        }
    
        if(pod !== ""){
            podQuery.where({"type": req.query.pod});
        }
    
        if(count !== ""){
            podQuery.where({"count": req.query.count});
        }
    
        const results = await Promise.all([podQuery, machineQuery]);
        res.json({pods: results[0], machines: results[1]});
    }
});

app.use((req, res, next) => {
    const error = new Error('Not Found!');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({error: {
        message: error.message
    }});
});

app.listen(port, () => {
  console.log('Swenson He E-comm Test Is Running On: ' + port);
});
