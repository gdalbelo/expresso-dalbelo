import React from 'react';

import {About, Description, Image} from '../styles';

const AboutSection = () => {
    return (
        <About>
            <Description>
                <h2>Expresso Dal Belo</h2>
                <h2>Transportadora</h2>
                <p>
                    Transportadora Expresso Dal Belo com 25 anos de história.
                    Transportando com eficiencia e rapidez.
                </p>
                <button style={{padding: '10px'}}>Contate-nos</button>
            </Description>
            <Image>
                <img src="./caminhaoDalBelo.png" style={{width: '250px'}} alt="Logo" />
            </Image>
        </About>
    );
}

export default AboutSection;