let pagesContent = {
    "one-page-website" : {
        images:[], 
    },
    "multi-page-website" : {
        images:[],
    },
    "oonline-store" : {
        images:[], 
    }
}



export const load = ({ params }) => {
    const slug = params.page
    const pageContent = pagesContent[slug]
    return {
        pageContent, 
        page:slug
    }
}