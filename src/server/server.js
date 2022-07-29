import express from 'express';
import mongoose from 'mongoose';
import router from './router.js';
import cors from 'cors';


const PORT = process.env.PORT || 4000;
const DB_URL = 'mongodb+srv://admin:admin@cluster0.k3hmzqc.mongodb.net/?retryWrites=true&w=majority';

const app = express();

app.use(express.json());
app.use(cors({
  origin: '*'
}));
app.use('/api', router);


async function startApp() {
  try {
    await mongoose.connect(DB_URL)
    ;
    app.listen(PORT, () => console.log('SERVER STARTED ON PORT', PORT));
  } catch (e) {
    console.log(e);
  }
}

startApp();

