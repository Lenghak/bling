import { Hono } from "hono";
import { cors } from "hono/cors";
import { csrf } from "hono/csrf";
import { logger } from "hono/logger";
import { prettyJSON } from "hono/pretty-json";
import { secureHeaders } from "hono/secure-headers";
import { trimTrailingSlash } from "hono/trailing-slash";
const app = new Hono();

// util
app
	.use(cors())
	.use(csrf())
	.use(logger())
	.use(prettyJSON())
	.use(secureHeaders())
	.use(trimTrailingSlash());

app.get("/", async (c) => {});

export default {
	port: 9000,
	fetch: app.fetch,
};
