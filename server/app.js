import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import CompanyData from "./dbSchema.js";
import { conn } from "./mongoConnections.js";

const PORT = process.env.PORT || 5000;
const app = express();

app.options("*", cors());
app.use(cors({ origin: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

await conn();

app.post("/", async (req, res) => {
  const word = req.body.word;

  console.log(word);

  CompanyData.find(
    { $text: { $search: word, $caseSensitive: false } },
    function (err, doc) {
      if (!err) {
        console.log("ok");
        res.status(200).json(doc);
      } else {
        console.error(err);
        res.status(404).json(err);
      }
    }
  );
});

app.listen(PORT, function () {
  console.log("server running on Port:" + PORT);
});
