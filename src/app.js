import express from "express";
import routers from "./routers/index.js";

const app = express()

app.get("/", (req, res) => {
    res.send("start")
})
routers(app)

export default app