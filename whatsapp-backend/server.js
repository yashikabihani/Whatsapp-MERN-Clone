import express from "express";
import mongoose from "mongoose";
import Messages from "./dbMessages.js";
import Pusher from "pusher";
import cors from "cors";

//App Config
const app = express();
const port = process.env.PORT || 9000;

var pusher = new Pusher({
  appId: "1071682",
  key: "24e06084f487cabc54fa",
  secret: "72a8772f4d712c3da07b",
  cluster: "ap2",
  encrypted: true,
});

//Middleware (We were getting the POST response in json format with just the id)
// To get the entire json, we use the middleware
app.use(express.json());
app.use(cors());

// app.use((req,res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Headers", "*");
//   next();
// });

//DB Config
const connection_url =
  "mongodb+srv://admin:sOvqh7BUcW0iyeot@cluster0.ehaku.mongodb.net/whatsappdb?retryWrites=true&w=majority";
mongoose.connect(connection_url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once("open", () => {
  console.log("DB is Connected");
  const msgCollection = db.collection("messagecontents");
  const changeStream = msgCollection.watch();

  //ChangeStream will lookout for any change in the requests
  changeStream.on("change", (change) => {
    console.log("A change occured", change);

    if(change.operationType === 'insert'){
      const messageDetails = change.fullDocument;
      pusher.trigger('messages', 'inserted',
      {
        name: messageDetails.name ,
        message: messageDetails.message,
        timestamp: messageDetails.timestamp,
        received: messageDetails.received
      }
    );
    } else{
      console.log('Error triggering Pusher')
    }
  });
});

//API Routes
app.get("/", (req, res) => res.status(200).send("Hello World"));

app.post("/messages/new", (req, res) => {
  const dbMessage = req.body;

  Messages.create(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/messages/sync", (req, res) => {
  Messages.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.listen(port, () => console.log(`Listening on localhost:${port}`));
