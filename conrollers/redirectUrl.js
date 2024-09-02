import { URL } from "../models/url.js"

async function handleRedirect(req, res) {
    const requestId = await req.params.shortId
    const findUrl = await URL.find({shortId: requestId})
    res.redirect(findUrl[0].redirectUrl)
}


export { handleRedirect } 