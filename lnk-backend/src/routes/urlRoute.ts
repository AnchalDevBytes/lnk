import { Hono } from "hono";
import { analytics, createShortUrl, redirectToOriginalUrl } from "../controllers/createShortUrl";

const urlRoute = new Hono();

urlRoute.post('/', createShortUrl);
urlRoute.get('/:shortId', redirectToOriginalUrl);
urlRoute.get('/analytics/:shortId', analytics);

export default urlRoute;
