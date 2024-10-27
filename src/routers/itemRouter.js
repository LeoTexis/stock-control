import { Router } from "express";

const router = Router()

router.get("/item", (req, res)=>{
    res.status(200).send('item get')
})

router.get("/item/:id", (req, res) => {
    res.status(200).send(`item get by id ${req.params.id}`)
})

router.post("item", (req, res) => {
    res.status(201).send(`item post`)
})

router.put("item", (req, res) => {
    res.status(201).send(`item put`)
})

router.delete("item", (req, res) => {
    res.status(204).send(`item delete`)
})

export default router