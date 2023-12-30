import React from 'react';
import styled from 'styled-components';

// Import icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faLocationDot, faWallet, faRoadCircleCheck } from '@fortawesome/free-solid-svg-icons'


import { About, Description, Image } from '../styles';

const ServicesSection = () => {
    return (
        <Services>
            <Image>
                <img src="./caminhaoDalBelo.png" alt="Serviços" />
            </Image>
            <ServiceDescription>
                <h2>Serviços</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <FontAwesomeIcon icon={faRoadCircleCheck} size='4x' />
                            <h3>Frete</h3>
                        </div>
                        <p>Cheque valores de frete</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <FontAwesomeIcon icon={faLocationDot} size='4x' />
                            <h3>Destinos</h3>
                        </div>
                        <p>Verificar fretes</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <FontAwesomeIcon icon={faWallet} size='4x' />
                            <h3>Preços</h3>
                        </div>
                        <p>Verificar preço do frete</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <FontAwesomeIcon icon={faTruck} size='4x' />
                            <h3>Regiões</h3>
                        </div>
                        <p>Regiões que viajamos</p>
                    </Card>
                </Cards>
            </ServiceDescription>
        </Services>
    );
}

const Services = styled(About)`
    h2 {
        padding-top: 5rem;
    }
    p {
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`;

const ServiceDescription = styled(Description)`
    margin-left: 2rem;
    flex: 2;
`;

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
`;

const Card = styled.div`
    padding: 0.5rem;
    flex-basis: 18rem;
    .icon{
        display: flex;
        align-items: center;
    }
    h3{
        margin-left: 1rem;
        background: white;
        color: black;
        padding: 1rem;
    }
`;

export default ServicesSection;