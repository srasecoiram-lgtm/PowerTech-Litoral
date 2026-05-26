const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3001;

const ACCESS_TOKEN = "2407447609626649|7uhOVD5cwXnj9XE7m_Vd8SMrIPw"; // Coloque seu token real
const VERIFY_TOKEN = "EAAiNj5OWUBkBOZBJv0EuwY6UOevkcLLpWZBHGXW2S4M08PcMppEMISRbcAUYAZA2gZCbDOO852T7gZA02OtI4AJDkuXLN5YULGKE6mWbJrWEym8U2V73fYEPGrgJLipb3pII8URiJZBYq8z8jNHmAeZBkn9JHuAYJkLYLxw6E95tnhNrtVV7s23ScddA9S8zHJh7z1sWbvPVxgxZCc4SbjfKXpnPHIZA8SPZBqAbzuTRIgjoWaOnNWXzVzmcB4EPZAGecQ7AAZDZD"; // Coloque o mesmo token que vai cadastrar no Facebook Developers

app.use(bodyParser.json());

// Endpoint para buscar posts do Instagram
app.get("/instagram-posts", async (req, res) => {
  try {
    if (ACCESS_TOKEN === "SEU_TOKEN_INSTAGRAM") {
      return res.status(400).json({ error: "Token do Instagram não definido." });
    }

    const response = await axios.get(
      `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink,like_count,comments_count&access_token=${ACCESS_TOKEN}`
    );
    res.json(response.data);
  } catch (error) {
    console.error("Erro ao buscar dados:", error.response?.data || error.message);
    res.status(500).json({ error: "Erro ao buscar posts do Instagram." });
  }
});

// Webhook (verificação e recebimento)
app.get("/webhook/instagram", (req, res) => {
  const mode = req.query["hub.mode"];
  const token = req.query["hub.verify_token"];
  const challenge = req.query["hub.challenge"];

  if (mode === "subscribe" && token === VERIFY_TOKEN) {
    console.log("Webhook verificado com sucesso!");
    res.status(200).send(challenge);
  } else {
    res.sendStatus(403);
  }
});

app.post("/webhook/instagram", (req, res) => {
  console.log("Notificação recebida do Instagram:", JSON.stringify(req.body, null, 2));
  res.sendStatus(200); // Sempre responda 200 OK
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
