const apiLink = 'https://bc.okonti.ru/api/contact';
export const getApiUrl = () => {
    const userValue = window.location.pathname.substring(6);
    return `${apiLink}/${userValue}/`;
}
