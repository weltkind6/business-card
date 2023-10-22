import React from 'react';

const TgLinkGenerator = ({ username, message }) => {
    const generateTelegramLink = () => {
        const encodedMessage = encodeURIComponent(message);
        return `https://t.me/${username}?text=${encodedMessage}`;
    };

    return (
        <a href={generateTelegramLink()} target="_blank" rel="noopener noreferrer">
            Написать в Telegram
        </a>
    );
};

export default TgLinkGenerator;
