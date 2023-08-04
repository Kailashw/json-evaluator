# json-evaluator

## Description

This is an Express application that provides an API for filtering user data based on user-defined JSONPath queries and a given user schema.

The application allows users to generate their custom JSONPath queries automaticallyw ith help of gpt 3 or gpt 4 by giving user query and is according to the defined schema. Users can fetch a subset of user data that matches their specified criteria.

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/kailashw/json-evaluator.git
   ```

2. Change into the project directory:

   ```
   cd json-evaluator
   ```

3. Install dependencies:

   ```
   npm install
   ```

4. create a `.env` file and add your open api key.

   ```
   touch .env

   OPENAI_API_KEY="YOUR_OPEN_API_KEY"
   ```

5. Start the application:
   ```
   npm start
   ```

The API will be available at `http://localhost:3000`.

## API Endpoints

### POST `/filter`

Endpoint for filtering user data based on user-defined JSONPath queries.

#### Sample Curl Request

```curl --location 'localhost:3000/eval' \
--header 'Content-Type: application/json' \
--data '{
    "query": "list of hospitals details from Bangalore.",
    "model": "network_hospital",
    "usegpt4": true
}'
```

## Error Handling

In case of invalid JSONPath queries or mismatched schemas, the API will return appropriate error responses.

## Dependencies

- Express.js: For creating the API endpoints and handling HTTP requests.
- jsonpath-plus: For evaluating JSONPath queries.
- gpt 3.5/ 4 : For generating JSON Path based on schema and user query.

## Contributing

If you'd like to contribute to this project, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
