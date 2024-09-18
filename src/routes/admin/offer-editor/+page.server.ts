import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

/** @type {import('./$types').PageServerLoad} */
export const load = async () => {
    const commercialOffers = await prisma.commercialOffer.findMany();
    await prisma.$disconnect()

    return {
        commercialOffers
    }
}


/** @type {import('./$types').Actions} */
export const actions = {
    createOffer : async ({ request }) => {
        const data = Object.fromEntries(await request.formData());
        const formData: CommercialOffer = JSON.parse(data.formSendData);
        console.log(formData);
        const commercialOffer = await prisma.commercialOffer.create({
            data: {
                ...formData
            }
        });

    }
}
