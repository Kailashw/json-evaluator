const DEFAULT__PROMPT =
  "We have provided a JSON schema below:\n {{schema}} \n Now for Given a task, respond with a JSON Path query (strictly matches the schema) complient with jsonpath-plus npm library that can retrieve data from a JSON value.\n Assume string values as case insensitive. Generate response for following task\n\n Task: {{task}} \nJSONPath:";

module.exports.DEFAULT_PROMPT = DEFAULT__PROMPT;
