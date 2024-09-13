import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';






export const load : PageLoad = ({ params }) => {
    const name = params.name;
    const project = params.project;


    return {
        name,
        project,
    };
}