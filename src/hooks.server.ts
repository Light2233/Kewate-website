import { dev } from '$app/environment';

import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { DEV_PASSWORD, DEMO } from "$env/static/private"

export const demoMode: Handle = async ({ event, resolve }) => {
    let response: Response;
    let isJoinDevPage = event.url.pathname === "/join";

	if ( DEMO == "on" ) {
        if ( dev ) {
            let password = event.cookies.get("dev-password");

            if ( password !== DEV_PASSWORD && !isJoinDevPage ) {
                return new Response("Access denied");
            }
        }
    } else if ( DEMO == "off" && isJoinDevPage) {
        return new Response("Not found", {status: 404})
    }

    response = await resolve(event);
    return response;

};

export const adminAuth: Handle = async ({ event, resolve }) => {
    // TODO: protected routes 

	const response = await resolve(event);
	return response;
};

export const handle = sequence(demoMode, adminAuth);