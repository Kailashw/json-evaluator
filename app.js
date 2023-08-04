const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();
const express = require("express");
const { JSONPath } = require("jsonpath-plus");
const { DEFAULT_PROMPT } = require("./data/prompt");
const data_default = require("./data/data");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// initialize open api.
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.post("/filter", async (req, res) => {
  try {
    const user_query = req.body.query;
    const data = data_default[`${req.body.model}_data`];
    const schema_model = JSON.stringify(
      data_default[`${req.body.model}_schema`]
    ).replace(/"/g, '\\"');
    const usegpt4 = req.body.usegpt4 || false;

    const PROMPT = DEFAULT_PROMPT.replace("{{schema}}", schema_model).replace(
      "{{task}}",
      JSON.stringify(user_query)
    );

    const completion = await openai.createChatCompletion({
      model: usegpt4 ? "gpt-4-0613" : "gpt-3.5-turbo",
      messages: [{ role: "user", content: PROMPT }],
    });

    const query = completion.data.choices[0].message.content.replace(/"/g, "");
    const result = JSONPath({ path: query, json: data });
    res.send({ query, result });
  } catch (error) {
    console.log("error reading json or parin input", JSON.stringify(error));
    res.send(JSON.stringify(error));
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
