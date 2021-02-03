import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { StaticQuery, graphql } from 'gatsby'
import styled, { keyframes } from 'styled-components'
import AnimationContainer from 'components/animation-container'
import AnimatedHeading from 'components/animated-heading'

class ServicesOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.manageLanguages();
    }

    render() {
        const Section = styled.section`
            position: relative;
            overflow: hidden;
            background-color: #111;
            background-image: url(${this.props.background.childImageSharp.fluid.src});
            background-size: cover;
            .heading {
                width: 100%;
            }
          }
        `

        const ServiceContainer = styled.div`
            background-color: rgba(0,0,0,.9);
            padding: 100px 0;
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

        const AnimatedShadow = keyframes`
            0%   {box-shadow: 0 28px 60px rgba(4, 229, 229, .5);}
            12%  {box-shadow: 0 28px 60px rgba(0, 246, 155, .5);}
            25% {box-shadow: 0 28px 60px rgba(80, 115, 184, .5);}
            37% {box-shadow: 0 28px 60px rgba(4, 229, 229, .5);}
            50% {box-shadow: 0 28px 60px rgba(7, 179, 155, .5);}
            62% {box-shadow: 0 28px 60px rgba(111, 186, 130, .5);}
            75% {box-shadow: 0 28px 60px rgba(80, 115, 184, .5);}
            87% {box-shadow: 0 28px 60px rgba(16, 152, 173, .5);}
            100% {box-shadow: 0 28px 60px rgba(0, 246, 155, .5);}
        `
        const ServiceElement = styled.div`
            margin-bottom: 20px;
            text-align: center;
            padding: 40px;
            border-radius: 20px;
            transition: .2s;
            &:hover {
                background-color: #000;
                animation: ${AnimatedShadow} 10s infinite alternate;
                transform: translateY(-10px);
            }
        `
         const ServiceHeading = styled.h4`
            font-size: 18px;
            font-weight: 500;
            font-family: Montserrat;
            color: #fff;
        `
        const ServiceSeparator = styled.div`
            height: 5px;
            width: 50px;
            background-color: #00f69b;
            margin-bottom: 10px;
            margin: auto;
         `
        const ServiceIcon = styled.div`
            width: 120px;
            height: 120px;
            margin: 0 auto 25px auto;
            background-color: #fff;
            border-radius: 200px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(120deg, #04e5e5, #5073b8, #1098ad, #07b39b, #6fba82);
            background-size: 300% 300%;
            animation: ${gradientAnimation} 5s ease-in-out infinite;
            img {
                max-height: 70px;
            }
        `

        const ServiceList = styled.ul`
            padding: 0;
            margin: 11px 0 0 0;
        `

        const ServiceListElement = styled.li`
            list-style: none;
            color: #c5c5c5;
            font-weight: 300;
            font-size: 14px;
            margin: 5px 0px;
        `

        return(
            <Section id="services">
                <ServiceContainer>
                    <Container>
                        <AnimatedHeading text={this.state.isDeLanguage ? 'Graf-Team Vorteile' : 'Преимущества Graf-Team'} />
                        <Row>
                            <Col md={4}>
                                <AnimationContainer animation="fadeInLeft" delay={200}>
                                        <ServiceElement>
                                            <ServiceIcon>
                                                    <img src={this.props.support.childImageSharp.fluid.src} alt="handshake-icon" />
                                            </ServiceIcon>
                                            <ServiceHeading>
                                                {this.state.isDeLanguage ? 'Unterstützung in allen Phasen' : 'Поддержка на всех этапах'}
                                            </ServiceHeading>
                                            <ServiceSeparator/>
                                            <ServiceList>
                                                <ServiceListElement>
                                                    {this.state.isDeLanguage
                                                        ? `Einführung in die Grundlagen von Projekten, Unterstützung bei
                                                    der Registrierung, Auswahl von Plänen und Einlagen, Unterstützung und Beratung 
                                                    in allen Belangen.`
                                                        : `Введение в основы проектов, помощь с регистрацией,
                                                    выбором планов и депозитов, сопровождение и консультирование по любым вопросам.`}
                                                </ServiceListElement>
                                            </ServiceList>
                                        </ServiceElement>
                                </AnimationContainer>
                            </Col>
                            <Col md={4}>
                                <AnimationContainer animation="fadeInDown"  delay={400}>
                                    <ServiceElement>
                                        <ServiceIcon>
                                                <img src={this.props.start.childImageSharp.fluid.src} alt="rocket-icon" />
                                        </ServiceIcon>
                                        <ServiceHeading>
                                            {this.state.isDeLanguage ? 'Schneller Start' : 'Быстрый старт'}
                                        </ServiceHeading>
                                        <ServiceSeparator/>
                                        <ServiceList>
                                            <ServiceListElement>
                                                {this.state.isDeLanguage
                                                    ? `Garantierte Ergebnisse und Umsatzwachstum bei minimalen 
                                                Investitionen, auch für diejenigen, die nichts über das Netzwerkgeschäft wussten oder es für unrentabel hielten.`
                                                    : `Гарантированный результат и рост дохода при минимальных вложениях даже
                                                у тех, кто ничего не знал о сетевом бизнесе или считал его неприбыльным.`}
                                            </ServiceListElement>
                                        </ServiceList>
                                    </ServiceElement>
                                </AnimationContainer>
                            </Col>
                            <Col md={4}>
                                <AnimationContainer animation="fadeInRight" delay={600}>
                                    <ServiceElement>
                                        <ServiceIcon>
                                                <img src={this.props.income.childImageSharp.fluid.src} alt="coin-in-hand-icon" />
                                        </ServiceIcon>
                                        <ServiceHeading>
                                            {this.state.isDeLanguage ? 'Unbegrenztes Einkommen' : 'Неограниченный доход'}
                                        </ServiceHeading>
                                        <ServiceSeparator/>
                                        <ServiceList>
                                            <ServiceListElement>
                                                {this.state.isDeLanguage
                                                    ? `Die Teilnahme an Empfehlungsprogrammen und der Aufbau eines eigenen automatisierten
                                                Netzwerks von Teilnehmern bringen Ihnen immer höhere Einnahmen.`
                                                    : `Участие в реферальных программах и построение собственной
                                                автоматизированной сети участников, приносящих вам постоянно растущий заработок.`}
                                            </ServiceListElement>
                                        </ServiceList>
                                    </ServiceElement>
                                </AnimationContainer>
                            </Col>
                            <Col md={4}>
                                <AnimationContainer animation="fadeInLeft" delay={800}>
                                    <ServiceElement>
                                        <ServiceIcon>
                                                <img src={this.props.stable.childImageSharp.fluid.src} alt="graph-icon" />
                                        </ServiceIcon>
                                        <ServiceHeading>
                                            {this.state.isDeLanguage ? 'Stabiles Wachstum' : 'Стабильный рост'}
                                        </ServiceHeading>
                                        <ServiceSeparator/>
                                        <ServiceList>
                                            <ServiceListElement>
                                                {this.state.isDeLanguage
                                                    ? `Ständige Steigerung des passiven Einkommens, Schaffung 
                                                und erfolgreiche Führung Ihres eigenen Business, Möglichkeiten und Perspektiven für die Teilnahme an profitablen Online-Projekten.`
                                                    : `Постоянное повышение пассивного дохода, создание и успешное ведение
                                                собственного бизнеса, возможности и перспективы участия в прибыльных онлайн-проектах.`}
                                            </ServiceListElement>
                                        </ServiceList>
                                    </ServiceElement>
                                </AnimationContainer>
                            </Col>
                            <Col md={4}>
                                <AnimationContainer animation="fadeInUp" delay={1000}>
                                    <ServiceElement>
                                        <ServiceIcon>
                                                <img src={this.props.learn.childImageSharp.fluid.src} alt="learn-icon" />
                                        </ServiceIcon>
                                        <ServiceHeading>
                                            {this.state.isDeLanguage ? 'Lernplattform' : 'Обучающая платформа'}
                                        </ServiceHeading>
                                        <ServiceSeparator/>
                                        <ServiceList>
                                            <ServiceListElement>
                                                {this.state.isDeLanguage
                                                    ? `Sie erhalten Zugriff auf die Drittanbieter-Plattform unseres Partners, 
                                                    auf der Sie zahlreiche Schulungsmaterialien und andere nützliche Informationen finden.`
                                                    : `Вы получите доступ на стороннюю платформу нашего партнёра, где есть много обучающих материалов и другой полезной информации.`}
                                            </ServiceListElement>
                                        </ServiceList>
                                    </ServiceElement>
                                </AnimationContainer>
                            </Col>
                            <Col md={4}>
                                    <AnimationContainer animation="fadeInRight" delay={1200}>
                                        <ServiceElement>
                                            <ServiceIcon>
                                                    <img src={this.props.transparent.childImageSharp.fluid.src} alt="security-icon" />
                                            </ServiceIcon>
                                            <ServiceHeading>
                                                {this.state.isDeLanguage ? 'Privatsphäre und Sicherheit' : 'Конфиденциальность и безопасность'}
                                            </ServiceHeading>
                                            <ServiceSeparator/>
                                            <ServiceList>
                                                <ServiceListElement>
                                                    {this.state.isDeLanguage
                                                        ? `Wenn Sie unserem Team beitreten, können Sie sich sicher sein, dass Ihre persönlichen Daten sicher geschützt sind und nicht an Dritte weitergegeben werden.`
                                                        : `Вступая в нашу команду, вы можете быть уверены, что ваши личные данные находятся под надёжной защитой и не передаются третьим лицам.`}
                                                </ServiceListElement>
                                            </ServiceList>
                                        </ServiceElement>
                                    </AnimationContainer>
                            </Col>
                        </Row>
                    </Container>
                </ServiceContainer>
            </Section>
        )
    }

    manageLanguages() {
        var isDeLanguage = window.location.pathname.includes('/de/');

        this.setState({
            isDeLanguage: isDeLanguage
        });
    }

}

export default props => (
    <StaticQuery
      query={graphql`
      query {
        background: file(relativePath: {eq: "bg.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 4000, quality: 100) {
              src
            }
          }
        }
        support: file(relativePath: {eq: "icons/support1.png"}) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
        start: file(relativePath: {eq: "icons/start1.png"}) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
        income: file(relativePath: {eq: "icons/income1.png"}) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
        stable: file(relativePath: {eq: "icons/stable1.png"}) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
        learn: file(relativePath: {eq: "icons/learn1.png"}) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
        transparent: file(relativePath: {eq: "icons/lock1.png"}) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
      }      
      `}
      render={({ 
        background,
        support,
        start,
        income,
        stable,
        learn,
        transparent}) => <ServicesOne
        background={background}
        support={support}
        start={start}
        income={income}
        stable={stable}
        learn={learn}
        transparent={transparent}
        {...props} />}
    />
  )