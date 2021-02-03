import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVk, faFacebook, faInstagram, faTelegram, faYoutube } from '@fortawesome/free-brands-svg-icons'

class Footer extends React.Component{

    render() {
        const FooterMain = styled.div`
            background-color: #111;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
        `

        const SocialIcons = styled.div`
            .social_icon {
                font-size: 15px;
                color: #555;
                margin: 0 5px;
                cursor: pointer;
                transition: .5s;
                &:hover {
                    color: #00f69b;
                }
            }
        `
        return (
            <FooterMain>
                <SocialIcons>
                    <FontAwesomeIcon icon={faVk} className="social_icon" onClick={() => window.open('https://vk.com/id591013649')}/>
                    <FontAwesomeIcon icon={faFacebook} className="social_icon" onClick={() => window.open('https://www.facebook.com/cityman.graf')}/>
                    <FontAwesomeIcon icon={faInstagram} className="social_icon" onClick={() => window.open('https://www.instagram.com/CityMan.Graf/')} />
                    <FontAwesomeIcon icon={faTelegram} className="social_icon" onClick={() => window.open('https://t.me/citymanblog')} />
                    <FontAwesomeIcon icon={faYoutube} className="social_icon" onClick={() => window.open('https://www.youtube.com/channel/UCQr1aVRFWz01mkZnqrZBUUQ')} />
                </SocialIcons>
            </FooterMain>
        )
    }
}
export default Footer