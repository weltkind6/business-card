const apiLink = 'https://bc.okonti.ru/api/contact';
export const vcardLink = 'https://bc.okonti.ru/vcard/'
export const getApiUrl = () => {
    const userValue = window.location.pathname.substring(6);
    return `${apiLink}/${userValue}/`;
}

export const getHash = () => window.location.pathname.substring(6)
