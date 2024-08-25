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



bot.on('polling_error', async (err) => {
    let d = new Date();
    let n = d.toLocaleTimeString();
    console.error(`${n} [bot] polling_error ${err.message}`)
    await bot.stopPolling()
});