// DEPENDENCIES
import { URL } from "../models/url.js";

// HANDLES THE POST REQUEST
async function handelGenerateNewShortURL(req, res) {
  const { nanoid } = await import('nanoid');

  const { redirectUrl } = req.body;

  if (!redirectUrl) {
    return res.status(400).json({ Error: 'redirectUrl is required' });
  }

  const shortId = nanoid(4);
  await URL.create({
    shortId: shortId,
    redirectUrl: redirectUrl
  });

  return res.json({ shorId: shortId });
}

// EXPORTS
export { handelGenerateNewShortURL };
