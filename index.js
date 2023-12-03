const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());

app.get("/records", (req, res) => {
  res.status(200).send({
    title: "Grace",
  });
});

app.post("/records/:id", (req, res) => {
  const { id } = req.params;
  const { artist } = req.body;

  if (!artist) {
    res.status(418).send({ message: "tá faltando o artista gatinha" });
  }

  res.send({
    record: `seu album do artista ${artist} e o id ${id}`,
  });
});

app.listen(PORT, () => console.log("Its alive!!!"));
