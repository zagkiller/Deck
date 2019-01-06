import Constants from "../Config/Constants";

export default class StringFormat {
    static getPrice(price, currency = '₽') {
        return price.toString().match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g).join(' ') + ' ' + currency;
    }

    static getTranslation(item, language = Constants.defaultLanguage) {
        return item.translation[language] ? item.translation[language] : item.translation[Constants.defaultLanguage];
    }

    static getCreditCardSecured(number) {
        return '**** **** **** ' + number.substr(-4, 4);
    }

    static getUsername(profile) {
        if (!profile.firstName && !profile.lastName) {
            return profile.phone.substr(-3, 3);
        }
        return `${profile.firstName} ${profile.lastName.substr(0, 1)}.`;
    }

    static getProductImage(item, size = 200) {
        return `${Constants.imageCDN}/Products${size}/${item.productId}.png`;
    }

    static getNumericPhone(phone) {
        return '+7' + phone.replace(/\D/g,'');
    }

    static getStickerImage(name) {
        return `${Constants.imageCDNStickers}/Stickers/${name}`;
    }

}
