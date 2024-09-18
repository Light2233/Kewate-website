

export function priceFormat(price){
    price = String (price);
    const toRub = new Intl.NumberFormat("ru", {
        style:"currency",
        currency: "rub",
        currebcyDuscplay: "name",
        minimumFractionDigits:0,
    });
    return toRub.format(price);
}

// for imask/svelte
export const options = {
    mask: '{+7} (000) 000-00-00',
    lazy: true
};


export function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const year = date.getFullYear(); 
  
    return `${day}.${month}.${year}`; 
}

export let serviceVerboseMap: Map<WebsiteCategory, string> = new Map();
serviceVerboseMap.set("landing", "Одностраничный сайт");
serviceVerboseMap.set("multi-page", "Многостраничный сайт");
serviceVerboseMap.set("store", "Интернет-магазин");