import { sendApplication } from "$lib/server/bot";
import appFormValidate from "$lib/validators/appFormValidate";
import { error } from "@sveltejs/kit";
import type { Actions } from '../$types';

// createPay: async ({request}) => {
//     let data: any = Object.fromEntries(await request.formData());
//     const offerIdToCount :any = JSON.parse(data.offerIdToCount)
//     const ids: string[] = Object.keys(offerIdToCount);
//     const orderId = v4();
//     const offers = await retailCRM.getOffers(ids);
//     const amount = await retailCRM.getOffersAmount(offerIdToCount, offers);
//     let deliveryCost = Number(data.deliverySelected);


export const actions = {
    sendApp: async ({ request }) => {
        let data = Object.fromEntries(await request.formData());

        const err = appFormValidate(data);
        if (err.error?.message)
            error(400, {message: err.error?.message});
        
        data.utm = JSON.parse(data?.utm ?? '{}');
        let form : ApplicationForm = {...data};

        await sendApplication(form);
    }
} satisfies  Actions 