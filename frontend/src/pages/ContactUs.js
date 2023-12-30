import React from 'react';

import styled from 'styled-components';

import SocialNetworkSection from '../components/SocialNetworkSection';
import ContactForm from '../components/ContactForm';

const ContactUs = () => {
    return (
        <ContactStyled>
            <Title><h3>Entrar em contato</h3></Title>
            <Areas>
                <ContactForm />
                <SocialNetworkSection />
            </Areas>
        </ContactStyled>
    )
}

const ContactStyled = styled.div`
    padding: 1rem 10rem;
    color: #353535;
    min-height: 90vh;
`;

const Title = styled.div`
    margin-bottom: 4rem;
    h2 {
        color: white;
    }
`;

const Areas = styled.div`
    display: flex;
    align-items: center;
`;

export default ContactUs;