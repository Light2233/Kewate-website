import landing_tagline_bg from '$lib/assets/landing_tagline_bg.mp4'
import modal_bg from "$lib/assets/application_modal_bg.png"
import online_store_tagline_bg from "$lib/assets/online_store_tagline_bg.png"
import multi_page_tagline_bg from "$lib/assets/multi_page_tagline_bg.png"


interface PageContent{
    page : string,
    images : Array<string>
}

let pagesContent = {
    "landing-page" : {
        images:[landing_tagline_bg,modal_bg]
    },
    "multi-page-website" : {
        images:[multi_page_tagline_bg,modal_bg]
    },
    "online-store" : {
        images: [online_store_tagline_bg,modal_bg] 
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