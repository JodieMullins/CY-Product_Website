import express from "express";

import { getItems } from "./shoes.service";

export const shoesRouter = express.Router();

// originally pulling images from router
// I have images from Fake Store API now, though, so I just want to maybe pull prices

/*
shoesRouter.get("/", async (req, res) =>{

    const items = await getItems();


    items.forEach((item) => {
        item.imageUrl = buildImageUrl(req, item.id);
    });
    res.json(items);
});
*/


// 
shoesRouter.get("/", async (req, res) =>{

    const items = await getItems();


    items.forEach((item) => {

        item.name = displayItemName(req, item.name);

        item.price = displayItemPrice(req,item.price);

    });
    res.json(items);
});