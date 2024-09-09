import { sendApplication } from "$lib/server/bot";
import appFormValidate from "$lib/validators/appFormValidate";
import type { Actions } from "@sveltejs/kit";

export const actions = {
    sendapp: async ({ request }) => {
        let data = Object.fromEntries(await request.formData());

        const err = appFormValidate(data);
        if (err.error?.message)
            return {
                success: false,
                message: err.error?.message
            }
        
        data.utm = JSON.parse(data?.utm ?? '{}');
        let form : ApplicationForm = {...data};

        form.page = "Покупка сайта";

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
} satisfies  Actions 