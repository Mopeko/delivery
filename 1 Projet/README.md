# Database Interaction API

This is an API that can be used to send requests to a database, create items, and delete items.

## How to Setup

To set up the API, follow these steps:

1. Install Express.js and MySQL2 using your terminal in VS Studio Code for example. Run the following commands:

    ```bash
    npm install express
    npm install mysql2
    ```

    This will generate a `node-modules` folder and a `package.json` file containing information about Express.js and MySQL2.

## Command and Routes

*Postman is recommended for your different requests!*

### GET Request

- `GET http://localhost:(your defined port)/items`: Returns a list of your items.
- `GET http://localhost:(your defined port)/items?parameters=(parameter_name)`: Returns a list of items by their different parameters.
- `GET http://localhost:(your defined port)/items/(an id in your table)`: Returns an item by its ID.

### CREATE Request

- `POST http://localhost:(your defined port)/items` (Specify your parameters in your request body in raw JSON format, not text): Create an item with your parameters.

### UPDATE Request

- `PUT http://localhost:(your defined port)/items/(an id in your table)` (Specify your parameters in your request body in raw JSON format, not text): Update an item in your table with your parameters.

### DELETE Request

- `DELETE http://localhost:(your defined port)/items/(an id in your table)`: Delete a complete row of your table by its ID.

Remember to replace `(your defined port)` and `(an id in your table)` with your specific values.
