import express from "express";
import itemsRouters from "./itemRouter.js"

const app = express()

export default app => {
    app.use(
        express.json(),
        itemsRouters
    )
}