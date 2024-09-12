import appFormValidate from "$lib/validators/appFormValidate";
import { sendApplication } from "$lib/server/bot";

import type { RequestEvent } from "../$types";
import type { Action } from "@sveltejs/kit";

export default async ({ request }: RequestEvent) : Promise<Action> => {
    let data = Object.fromEntries(await request.formData()) as ApplicationForm;

    const err = appFormValidate(data);
    if (err.error?.message)
        return {
            success: false,
            message: err.error?.message
        }
    
    data.utm = JSON.parse(data?.utm ?? '{}');
    let form = {...data};

    form.page = "Главная";

    try {
        await sendApplication(form);
        return {
            success: true
        }
    } catch (err) {
        return {
            success: false,
            message: "Oops, some server error :("
        }
    }
} 