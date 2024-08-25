import type { LayoutServerLoad } from './$types';


export const load : LayoutServerLoad = async ({ url }) => {

    let utm = {
        utm_source: url.searchParams.get('utm_source'),
        utm_medium:  url.searchParams.get('utm_medium'),
        utm_campaign:  url.searchParams.get('utm_campaign'),
        utm_term:  url.searchParams.get('utm_term'),
        utm_content:  url.searchParams.get('utm_content'),
    }

    return {utm}

}
