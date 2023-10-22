import React from 'react';

const WhatsAppLinkGenerator = ({ phoneNumber, message }) => {
    const generateWhatsAppLink = () => {
        const encodedMessage = encodeURIComponent(message);
        return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    };

    return (
        <a href={generateWhatsAppLink()} target="_blank" rel="noopener noreferrer">
            Написать в WhatsApp
        </a>
    );
};

export default WhatsAppLinkGenerator;

