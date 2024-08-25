import { sendApplication } from "$lib/server/bot";
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
    await sendApplication({
        page: "Разработка сайта",
        source: "Г - д",
        // utm: {
        //     "utm_source": "yandex_direct",
        //     "utm_medium": "test_medium"
        // },
        
        name: "Alex Jonh",
        // company: "Kewate",
        phone: "+7 918 012-62-31",
        // email: "deminms2004@mail.ru",
        budget: "до 50 тыс."
    })
};