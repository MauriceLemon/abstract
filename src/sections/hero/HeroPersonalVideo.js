import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled, { keyframes } from 'styled-components'
import Typewriter from 'typewriter-effect'
import LoopVideo from './assets/earth-loop.mp4'
import Glitch from 'components/glitch'
var scrollToElement = require('scroll-to-element');

class HeroPersonalVideo extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            height: 0,
            width: 0
        }
    }

    getOptions = () => {
        if (this.isDeLanguage) {
            return {
                strings: [
                    'Wir wissen, wie man mit Investitionen Geld verdient.',
                    'Wir zeigen, wie und wo investiert werden soll.',
                    'Wir helfen Ihnen, Ihr Einkommen zu steigern.',
                ],
                autoStart: true,
                loop: true,
            }
        } else {
            return {
                strings: [
                    'Мы знаем, как заработать на инвестициях',
                    'Мы покажем, как и куда инвестировать',
                    'Мы поможем увеличить ваш заработок',
                ],
                autoStart: true,
                loop: true,
            }
        }

    }

    updateDimensions = () => {
        if (this.state.height !== window.innerHeight) {
            this.setState({height: window.innerHeight})
        }
        if (this.state.width !== window.innerWidth) {
            this.setState({width: window.innerWidth})
        }
    }

    
    componentDidMount() {
        this.setState({height: window.innerHeight, width: window.innerWidth})
        window.addEventListener('resize', this.updateDimensions)
        document.body.addEventListener('mousemove', (e) => {
            var amountMovedX = (e.clientX * -.1 / 8);
            var amountMovedY = (e.clientY * -.1 / 8);
            var x = document.getElementsByClassName("parallax-hero-item");
            var i;
            for (i = 0; i < x.length; i++) {
              x[i].style.transform='translate(' + amountMovedX + 'px,' + amountMovedY + 'px)'
            }
        });
        this.switchButtons();
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions)
    }

    render() {

        const Section = styled.section`
            position: relative;
            .particles {
                position: absolute;
                width: 100%;
                height: 100%;
            }

            background-size: cover;
            background-repeat: no-repeat;
        `

        const VideoContainer = styled.div`
            width: 100%;
            display: flex;
            align-items: center;
            overflow: hidden;
            position: relative;
            video {
                position: absolute;
            }
        `

        const Overlay = styled.div`
             width: 100%;
             height: 100%;
             position: absolute;
             background-color: rgba(0, 0, 0, 0.5);
             z-index: 0;
        `

        const Heading = styled.div`
            .glitch {
                font-size: 100px;
                line-height: 140px;
                font-weight: 600;
                color: #fff;
                @media (max-width: 767px) {
                    font-size: 40px;
                    line-height: 50px;
                }
            }
        `

        const SubHeading = styled.h2`
            font-size: 18px;
            font-weight: 300;
            text-transform: uppercase;
            letter-spacing: 4px;
            color: #ccc;
            @media (max-width:767px) {
                font-size: 14px;
            }
        `
        const Type = styled.div`
            font-size: 24px;
            line-height: 50px;
            color: #fff;
            text-transform: uppercase;
            margin-left: 6px;
            @media (min-width:768px) and (max-width:1500px) {
                font-size: 23px;
                line-height: 20px;
            }
            @media (max-width:767px) {
                font-size: 13px;
                line-height: 20px;
            }
            span {
                font-family: Montserrat, sans-serif;
            }
        `
        const gradientAnimation = keyframes`
            0% {
              background-position: 15% 0%;
            }
            50% {
              background-position: 85% 100%;
            }
            100% {
              background-position: 15% 0%;
            }
          `

        const CtaButton = styled.button`
            font-size: 16px;
            font-weight: 600;
            color: #000;
            border: none;
            width: fit-content;
            padding: 10px 40px;
            border-radius: 40px;
            background: linear-gradient(120deg, #04e5e5, #00f69b, #5073b8, #1098ad, #07b39b, #6fba82);
            background-size: 300% 300%;
            animation: ${gradientAnimation} 4s ease-in-out infinite;
            transition: all 0.3s;
            
            &:hover {
                box-shadow: 0 0 2rem #00f69b;
                background: #00f69b;
            }
            
            &:active,
            &:focus {
                outline: none;
            }
            
            @media (max-width:767px) {
                font-size: 14px;
                padding: 10px 20px;
            }
        `

        const InviteText = styled.p`
            font-family: Montserrat, sans-serif;
            font-size: 16px;
            color: #ccc;
            line-height: 20px;
            letter-spacing: 4px;
            text-transform: uppercase;
            margin: 40px 0px 10px 0px;
            
            @media (max-width:767px) {
                font-size: 12px;
                letter-spacing: 1px;
            }
        `

        const HeadingBox = styled.div`
            height: 500px;
            width: 900px;
            margin: auto;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            &:after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                border-radius: 5px;
                background: linear-gradient(120deg, #04e5e5, #00f69b, #5073b8, #1098ad, #07b39b, #6fba82);
                background-size: 300% 300%;
                clip-path: polygon(0% 100%, 10px 100%, 10px 10px, calc(100% - 10px) 10px, calc(100% - 10px) calc(100% - 10px), 10px calc(100% - 10px), 10px 100%, 100% 100%, 100% 0%, 0% 0%);
            }
            &.animate:after {
                animation: ${gradientAnimation} 4s ease-in-out infinite;
            }
            @media (max-width: 767px) {
                height: 350px;
            }
        `

        return (
            <Section id="home">
                <VideoContainer style={{height: `${this.state.width > 500 ? this.state.height : 350}px`}}>
                    {/*<video autoPlay="autoplay" loop="loop" muted style={{height: `${this.state.width >= 1024 && this.state.width < 1200 ? "100%": "auto"}`}}>*/}
                    <video autoPlay="autoplay" loop="loop" muted style={{height: `1080px`}}>
                        <source src={LoopVideo} type="video/mp4" />
                    </video>
                    <Overlay></Overlay>
                    <HeadingBox  className="parallax-hero-item animate">
                        <SubHeading className="parallax-hero-item">
                            {this.isDeLanguage ? 'Willkommen im' : 'Добро пожаловать в'}
                        </SubHeading>
                        <Heading className="parallax-hero-item">
                            <Glitch text="GRAF-TEAM" />
                        </Heading>
                        <Type className="parallax-hero-item">
                            <Typewriter
                                options={this.getOptions()}
                            />
                        </Type>
                        <InviteText>
                            {this.state.invitationText}
                        </InviteText>
                        <CtaButton onClick={this.action}>
                            {this.state.btnName}
                        </CtaButton>
                    </HeadingBox>
                </VideoContainer>
            </Section>
        )
    }

    navigate(id) {
        const el = document.getElementById(id)
        scrollToElement(el, {
            offset: 0,
            ease: 'in-out-expo',
            duration: 2000
        })
    }

    switchButtons() {
        var self = this;
        var pathname = window.location.pathname;
        this.isDeLanguage = pathname.includes('/de/');
        pathname = this.isDeLanguage ? pathname.slice(3) : pathname;

        switch (pathname) {
            case '/stellar-fund/':
                this.action = function () {
                    window.open('https://stellarfund.io/ref/graf77rudolf', '_blank')
                };
                this.setState({
                    btnName: this.isDeLanguage ? 'Registrierung im "Stellar Fund"' : 'Зарегистрироваться в "Stellar Fund"',
                    invitationText: this.isDeLanguage ? 'Einladung zum "Stellar Fund" Projekt:' : 'Приглашение в проект "Stellar Fund":'
                });
                break;
            case '/tronadz/':
                this.action = function () {
                    window.open('https://tron-adz.com/?r=4962', '_blank')
                };
                this.setState({
                    btnName: this.isDeLanguage ? 'Registrierung im "Tron Adz"' : 'Зарегистрироваться в "Tron Adz"',
                    invitationText: this.isDeLanguage ? 'Einladung zum "Tron Adz" Projekt:' : 'Приглашение в проект "Tron Adz":'
                });
                break;
            case '/skyway/':
                this.action = function () {
                    window.open('https://skyway-lk.link-stats.site/auth/registration?partner_id=152559', '_blank')
                };
                this.setState({
                    btnName: this.isDeLanguage ? 'Registrierung im "SkyWay"' : 'Зарегистрироваться в "SkyWay"',
                    invitationText: this.isDeLanguage ? 'Einladung zum "SkyWay" Projekt:' : 'Приглашение в проект "SkyWay":'
                });
                break;
            case '/finiko/':
                this.action = function () {
                    window.open('https://thefiniko.com/r/56738', '_blank')
                };
                this.setState({
                    btnName: this.isDeLanguage ? 'Registrierung im "Finiko"' : 'Зарегистрироваться в "Finiko"',
                    invitationText: this.isDeLanguage ? 'Einladung zum "Finiko" Projekt:' : 'Приглашение в проект "Finiko":'
                });
                break;
            case '/crowd1/':
                this.action = function () {
                    window.open('https://crowd1.com/signup/graf777', '_blank')
                };
                this.setState({
                    btnName: this.isDeLanguage ? 'Registrierung im "СROWD1"' : 'Зарегистрироваться в "СROWD1"',
                    invitationText: this.isDeLanguage ? 'Einladung zum "СROWD1" Projekt:' : 'Приглашение в проект "CROWD1":'
                });
                break;
            default:
                this.action = function () {
                    self.navigate("portfolio")
                };
                this.setState({
                    btnName: this.isDeLanguage ? 'Wählen Sie ein Investitionsprojekt' : 'Выбрать инвестиционный проект',
                    invitationText: ''
                });
        }
    }
}

export default props => (
    <StaticQuery
      query={graphql`
      query {
        shapes: allFile(filter: {extension: {regex: "/(png)/"}, relativeDirectory: {eq: "shapes"}}) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 100) {
                  src
                }
              }
            }
          }
        }
      }    
      `}
      render={({ shapes }) => <HeroPersonalVideo shapes={shapes.edges} {...props} />}
    />
  )