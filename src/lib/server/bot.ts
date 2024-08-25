import 'dotenv/config'
import TelegramBot from "node-telegram-bot-api";


const token = process.env.BOT_TOKEN ?? "";
var adminIds: number[] = [];


const bot = new TelegramBot(token, {polling: true});


const idsPattern = /\s*,\s*/;

function loadAdminIds() : void {
    let ids = process.env.ADMIN_IDS;

    let d = new Date();
    let n = d.toLocaleTimeString();

    if (!ids) {
        return console.error(`${n} [bot] load_admins_id error: env variable ADMIN_IDS is undefined`);
    };

    adminIds = (ids.split(idsPattern)).map((id) => Number(id));
}

loadAdminIds()


function createUtm(utm: {[name:string] : string} | undefined) {
    let utmOut : string = "\n";

    if (!utm)
        return 'Отсутствует\n'

    for (const key in utm) {
        utmOut += `    <i>${key}</i> = ${utm[key]}\n`
    }

    return utmOut

}

export async function sendApplication(form:ApplicationForm) {
    let utm = createUtm(form?.utm);

    let d = new Date();
    let n = d.toLocaleTimeString();

    let appText = `<b>Новая заявка.</b>
    
<b>Страница:</b> ${form.page}
<b>Источник:</b> ${form.source}
<b>UTM-метки:</b> ${utm}
<b>Имя:</b> ${form.name}
<b>Компания:</b> ${form?.company ?? 'Отсутствует'}
<b>Телефон:</b> ${form.phone}
<b>E-mail:</b> ${form?.email ?? 'Отсутствует'}
<b>Бюджет:</b> ${form.budget}
`
    for (let i = 0; i < adminIds.length; i++) {
        const adminId = adminIds[i];
        
        try {
            await bot.sendMessage(adminId, appText, {parse_mode: "HTML"})
        } catch (err) {
            console.warn(`${n} [bot] warn: can't send message to id ${adminId} ${err}`)
        }
    }
};


bot.on('polling_error', async (err) => {
    let d = new Date();
    let n = d.toLocaleTimeString();
    console.error(`${n} [bot] polling_error ${err.message}`)
    await bot.stopPolling()
});