import { dev } from '$app/environment';

import { error, type Handle } from '@sveltejs/kit';
import { DEV_PASSWORD } from "$env/static/private"

export const handle: Handle = async ({ event, resolve }) => {
	if (dev) {
        let devPassword = event.cookies.get("dev-password");
        if ( devPassword !== DEV_PASSWORD && event.url.pathname !== "/join") {
            return new Response("Access denied");
        }
    } else if (event.url.pathname == "/join") {
        error(404);
    };

	const response = await resolve(event);
	return response;
};