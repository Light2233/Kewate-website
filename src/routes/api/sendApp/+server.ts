import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

import { sendApplication } from "$lib/server/bot";
import appFormValidate from "$lib/validators/appFormValidate";

export const POST: RequestHandler = async ({ request }) => {
	const data = await request.json();

    const err = appFormValidate(data);
    if (err.error?.message)
        return json({
            success: false,
            message: err.error?.message ?? 'unexpexted error',
        })

    data.utm = JSON.parse(data?.utm ?? '{}');
    let form : ApplicationForm = {...data}

    await sendApplication(form);

    return json({
        success: true
    })

};