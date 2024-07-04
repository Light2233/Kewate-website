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