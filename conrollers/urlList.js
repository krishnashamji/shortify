import { URL } from "../models/url.js";

// HANDLES GET REQUEST
async function handleUrlsList(req, res) { 
    const createdUrls = await URL.find({});
    console.log(createdUrls)
    res.send(createdUrls);
 }

export { handleUrlsList }