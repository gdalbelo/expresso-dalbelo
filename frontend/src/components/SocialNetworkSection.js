import React from "react";

import styled from 'styled-components';

import { faSquareGithub, faLinkedin, faYoutubeSquare, faTelegramPlane, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialNetworkSection = () => {
    return (
        <Network>
        <Social href="http://github.com/gdalbelo" target="_blanck">
            <FontAwesomeIcon icon={faGithubSquare} size='4x' />
            <h3>github.com/gdalbelo</h3>
        </Social>
        <Social href="https://www.linkedin.com/in/gabriel-santos-dal-belo-4264551a/" target="_blanck">
            <FontAwesomeIcon icon={faLinkedin} size='4x' />
            <h3>LinkedIn</h3>
        </Social>
        <Social href="https://www.youtube.com/channel/UCNDsy1qtN8CS5doWdb0xt0g" target="_blanck">
            <FontAwesomeIcon icon={faYoutubeSquare} size='4x' />
            <h3>Youtube</h3>
        </Social>
    </Network>
    );
}

const Network = styled.div`
    padding: 1rem 5rem;
`;

const Social =  styled.a`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border-radius: 15px 50px;
    padding-left: 2rem;
    text-decoration: none; 
    &:hover{
        background: yellow;
        cursor: pointer;
    }
    h3{
        color: grey;
        margin: 2rem;
    }
    color: inherit;
`;

export default SocialNetworkSection;