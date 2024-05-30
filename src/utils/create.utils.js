export const createBaseMessengerLinksByName = (name) => {
    switch (name){
        case 'whatsapp':
            return 'https://www.whatsapp.com/'
        case 'telegram':
            return 'https://telegram.org/'
        default:
            return ''
    }
}