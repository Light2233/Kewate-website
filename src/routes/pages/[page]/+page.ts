import modal_bg from "$lib/assets/application_modal_bg.png"
import landing_tagline_bg from '$lib/assets/landing_tagline_bg.mp4'
import online_store_tagline_bg from "$lib/assets/online_store_tagline_bg.png"
import multi_page_tagline_bg from "$lib/assets/multi_page_tagline_bg.png"


import bg2 from "$lib/assets/taglines/tagline2_bg.png"
import pc from "$lib/assets/taglines/tagline2_pc.png"

import bg3 from "$lib/assets/taglines/tagline3_bg.png"
import laptop from "$lib/assets/taglines/tagline3_laptop.png"

import landing_bg from "$lib/assets/landing_modal_bg.png"
import store_bg from "$lib/assets/online_store_modal_bg.png"


interface PageContent{
    page : string,
    images : Array<string>
}

let pagesContent = {
    "landing-page" : {
        images:[landing_tagline_bg,landing_bg]
    },
    "multi-page-website" : {
        images:[bg2,landing_bg,pc]
    },
    "online-store" : {
        images: [bg3,landing_bg,laptop] 
    }
}



export const load = ({ params }) => {
    const slug = params.page;

    const pageContent : PageContent={
        page : slug,
        images : pagesContent[slug].images
    }

    return pageContent as PageContent
}