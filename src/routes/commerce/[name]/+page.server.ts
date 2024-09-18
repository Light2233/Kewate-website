import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ params }) => {
    let name = params.name;

    const commercialOffer = await prisma.commercialOffer.findFirst({
        where: {
            url: name
        }
    });

    return {
        commercialOffer
    }
}
