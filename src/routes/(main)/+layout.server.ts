import type { LayoutServerLoad } from '../$types';

// Assets
import nikolay from "$lib/assets/nikolay.png"
import nikolay_big from "$lib/assets/nikolay_big.png"
import nikolayBig from "$lib/assets/command/nikolay.webp"
import daniil from "$lib/assets/command/daniil.jfif"
import andey from "$lib/assets/command/andrey.webp"
import nikita from "$lib/assets/command/nikita.jfif"
import maxim from "$lib/assets/command/maxim.webp"




var team : TeamMember[] = [
    {
        name: "Николай Ковальчук",
        speciality : "CEO Kewate",
        url : nikolayBig
    },
    {
        name: "Никита Корчагин",
        speciality : "Продуктовый дизайнер, Lead",
        url : nikita
    },
    {
        name: "Максим Дёмин",
        speciality : "Backend–разработчик",
        url : maxim
    },
    {
        name: "Даниил Микитчук",
        speciality : "Frontend–разработчик",
        url : daniil
    },
    {
        name: "Андрей Орлов",
        speciality : "Frontend–разработчик",
        url: andey
    },
]

export const load : LayoutServerLoad = async ({ url }) => {

    let utm = {
        utm_source: url.searchParams.get('utm_source'),
        utm_medium:  url.searchParams.get('utm_medium'),
        utm_campaign:  url.searchParams.get('utm_campaign'),
        utm_term:  url.searchParams.get('utm_term'),
        utm_content:  url.searchParams.get('utm_content'),
    }

    return {
        utm,
        team
    }

}
