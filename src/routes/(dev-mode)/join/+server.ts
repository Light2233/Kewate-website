import type { RequestHandler } from './$types';
import { json, redirect } from '@sveltejs/kit';
import { DEV_PASSWORD } from "$env/static/private"
import { goto } from '$app/navigation';

export const POST: RequestHandler = async ({ request, cookies }) => {
	const data = await request.json()

    if (DEV_PASSWORD === data.password) {
        cookies.set("dev-password", data.password, {path: "/"});
        return json({success: true});
    }

    return json({success: false});
};