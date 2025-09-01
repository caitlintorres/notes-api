# 📝 Notes API

A simple RESTful **Notes API** built with Node.js + Express.\
It allows you to **create, read, update, and delete notes** stored in
memory or a database.

------------------------------------------------------------------------

## 🚀 Features

-   Create new notes
-   Retrieve all notes or a single note by ID
-   Update existing notes
-   Delete notes
-   JSON responses

------------------------------------------------------------------------

## 📦 Installation

``` bash
git clone https://github.com/caitlintorres/notes-api.git
cd notes-api
npm install
```

------------------------------------------------------------------------

## ⚙️ Running Locally

``` bash
npm start
```

By default, the server runs on:\
👉 `http://localhost:3000`

------------------------------------------------------------------------

## 📖 API Endpoints

  ---------------------------------------------------------------------------------------------------------------
  Method   Endpoint           Description                   Body Example
  -------- ------------------ ----------------------------- -----------------------------------------------------
  GET      `/notes`           Get all notes                 ---

  GET      `/notes/:id`       Get a single note by ID       ---

  POST     `/notes`           Create a new note             `{ "title": "Test", "content": "Hello world" }`

  PUT      `/notes/:id`       Update an existing note       `{ "title": "Updated", "content": "Changed text" }`

  DELETE   `/notes/:id`       Delete a note by ID           ---
  ---------------------------------------------------------------------------------------------------------------

------------------------------------------------------------------------

## 🔒 Environment Variables

Create a `.env` file in the project root:

    PORT=3000

*(Add DB connection string here if you expand to MongoDB/Postgres/etc.)*

------------------------------------------------------------------------

## 🛠 Technologies

-   Node.js
-   Express.js
-   (Optional) MongoDB / SQLite / Postgres
-   dotenv

------------------------------------------------------------------------

## 📄 License

MIT
