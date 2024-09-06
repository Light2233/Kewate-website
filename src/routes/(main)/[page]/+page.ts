import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';


import landing_tagline_bg from '$lib/assets/landing_tagline_bg.mp4'

import bg2 from "$lib/assets/taglines/tagline2_bg.png"
import pc from "$lib/assets/taglines/tagline2_pc.png"

import bg3 from "$lib/assets/taglines/tagline3_bg.webp"
import laptop from "$lib/assets/taglines/tagline3_laptop.png"

import landing_bg from "$lib/assets/landing_modal_bg.png"

var websites: Websites = new Map();

websites.set("landing", {
    name: "Landing-page",
    term : "2 недели",
    purpose: "Подойдёт для бизнеса, мероприятий и рекламы",
    time : "Сайт будет готов через 2 недели",
    advantages : [
        {
            title: "Повышение продаж",
            desc: "Повышение конверсии и мотивация пользователей к совершению целевого действия с помощью фокуса на продукте"
        },
        {
            title: "Сбор данных",
            desc: "Развитие базы потенциальных клиентов с помощью форм для сбора данных"
        },
        {
            title: "Узнаваемость бренда",
            desc: "Позволит расширить охват и привлечь внимание целевой аудитории"
        }
    ],
    cost : 60000,
    taglineDesc : "Повысим продажи и конверсию с помощью грамотного дизайна",
    images:[landing_tagline_bg,landing_bg],
    pageTitle : "Одностраничный сайт"
});

websites.set("multi-page", {
    name: "Много&shyстраничный сайт",
    term : "от 2 недель",
    purpose: "Подойдёт для бизнеса, мероприятий и рекламы",
    time : "Сайт будет готов от 2 недель — в зависимости от сложности",
    advantages : [
        {
            title: "Размещение информации",
            desc: "Разместите релевантную информацию о компании на сайте и расскажите аудитории о вашем деле"
        },
        {
            title: "Сбор данных",
            desc: "Развитие базы потенциальных клиентов с помощью форм для сбора данных"
        },
        {
            title: "Узнаваемость бренда",
            desc: "Позволит расширить охват и привлечь внимание целевой аудитории"
        }
    ],
    cost : 80000,
    taglineDesc : "Повысим продажи и конверсию с помощью грамотного дизайна",
    images:[bg2,landing_bg,pc],
    pageTitle : "Многостраничный сайт"
});

websites.set("store", {
    name: "Интернет-магазин",
    term : "2 месяца",
    purpose: "Ключ к автоматизации бизнеса и повышению продаж",
    time : "Сайт будет готов через 2 месяца",
    advantages : [
        {
            title: "Расширение географии продаж",
            desc: "Продавайте услуги и товары по всему миру, не ограничиваясь физическим местоположением. Откройте новые рынки и возможности для роста"
        },
        {
            title: "Автоматизация процессов",
            desc: "Автоматизируйте обработку заказов, управление запасами и логистику"
        },
        {
            title: "Узнаваемость бренда",
            desc: "Позволит расширить охват и привлечь внимание целевой аудитории"
        }
    ],
    cost : 150000,
    taglineDesc : "Повысим продажи и конверсию с помощью грамотного дизайна",
    images: [bg3,landing_bg,laptop],
    pageTitle : "Интернет-магазин"
});


var projects: Project[] = [
    {
        name: "Manuspect — сервис для анализа продаж",
        tags:[{name: "Сервис"},{name: "Продуктовый дизайн"}]
    },
    {
        name: "RusStroj — строительство элитных домов в Сербии",
        tags:[{name: "Сайты"}]
    },
    {
        name: "SomeBrand — повышение конверсии после редизайна интернет-магазина",
        tags:[{name: "Интернет-магазин"},{name: "Продуктовый дизайн"}]
    },
    {
        name: "DA&BR — Повысили конверсию на 120 % с помощью редизайна сайта",
        tags:[{name: "Сайты"},{name: "Продуктовый дизайн"}]
    },
    {
        name: "DA&BR — Повысили конверсию на 120 % с помощью редизайна сайта",
        tags:[{name: "Сайты"},{name: "Продуктовый дизайн"}]
    },     
]

export const load : PageLoad = ({ params }) => {
    const slug = params.page as WebsiteCategory;
    const websiteInfo = websites.get(slug);

    if (websiteInfo === undefined)
        error(404)


    return {
        websiteInfo,
        slug,
        projects,
    };
}