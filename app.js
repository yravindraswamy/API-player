const express = require("express");
const path = require("path");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const app = express();
const dbPath = path.join(__dirname, "cricketTeam.db");
let db = null;
const initializeDbAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
    app.listen(3001, () => {
      console.log("Server is Running at http://localhost:3001/");
    });
  } catch (e) {
    console.log(`DB Error ${e.message}`);
    process.exit(1);
  }
};

initializeDbAndServer();
//GET players

// app.get("/players/", async (request, response) => {
//   const getPlayerQuery = `SELECT * FROM cricket_team;`;
//   const playersDetails = await db.all(getPlayerQuery);
//   response.send(playersDetails);
// });

//API FOR adding player to the cricket_team table

app.post("/players/", async (request, response) => {
  const playerDetails = request.body;
  console.log(playerDetails);
});

//API for get player
app.get("/players/:playerId", (request, response) => {});
//API for update player details
app.put("/players/:playerId", (request, response) => {});

//API for delete player from cricket_team
app.delete("players/:playerId", (request, response) => {});

module.exports = app;
