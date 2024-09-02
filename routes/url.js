// DEPENDENCIES
import express from "express";
import { URL } from "../models/url.js"
import { handleRedirect } from "../conrollers/redirectUrl.js";
import { handelGenerateNewShortURL } from "../conrollers/url.js";
import { handleUrlsList } from "../conrollers/urlList.js";
const urlRoute = express.Router();

// ROUTES THE POST REQUEST FROM TO HANDLER
urlRoute.post("/", handelGenerateNewShortURL);
urlRoute.get("/urls", handleUrlsList)
urlRoute.get("/:shortId", handleRedirect);

// EXPORTS
export { urlRoute }; 