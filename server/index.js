import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import posts from './router/posts.js';
import mongoose from 'mongoose';


const app = express();
const PORT = process.env.port || 5000;

const URI = 'mongodb+srv://admin:Hienmai@cluster0.gmvmc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
// link in : https://cloud.mongodb.com/v2/6106704ede8a795ed84b9908#clusters/connect?clusterId=Cluster0

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }));
//data limit from FE is 30mb 
app.use(cors());
// all request be apply cors(), example app.use('/',cors()) just request localhost:5000/ apply

app.use('/posts', posts)

mongoose
    .connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('connected to DB');
        app.listen(PORT, () => {
            console.log(`Server is running by PORT ${PORT}`);
        })
    })
    .catch((err) => {
        console.log('err', err)
    })
