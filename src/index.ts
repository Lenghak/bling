import { Hono } from "hono";
import { cors } from "hono/cors";
import { csrf } from "hono/csrf";
import { logger } from "hono/logger";
import { prettyJSON } from "hono/pretty-json";
import { secureHeaders } from "hono/secure-headers";
import { trimTrailingSlash } from "hono/trailing-slash";

import { clerkMiddleware, getAuth } from "@hono/clerk-auth";

const app = new Hono();

app
	.use(cors())
	.use(csrf())
	.use(logger())
	.use(prettyJSON())
	.use(secureHeaders())
	.use(trimTrailingSlash())
	.use("*", clerkMiddleware());

app.get("/", (c) => {
	const auth = getAuth(c);

	if (!auth?.userId) {
		return c.json({
			message: "You are not logged in.",
		});
	}

	return c.json({
		message: "You are logged in!",
		userId: auth.userId,
	});
});
export default {
	port: 9000,
	fetch: app.fetch,
};
