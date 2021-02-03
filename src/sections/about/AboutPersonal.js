import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import styled, { keyframes } from 'styled-components'
import RevealContent from 'components/reveal-content'
import { StaticQuery, graphql } from 'gatsby'
import Counter from 'components/counter'
import AnimationContainer from 'components/animation-container'
import TabsPart from 'sections/about/parts/TabsPart'

class AboutPersonal extends React.Component {
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
            background-color: #050505;
            padding-top: 50px;
            .particles {
                position: absolute;
                width: 100%;
                height: 100%;
            }
            @media (max-width: 767px) {
                padding: 80px 20px;
            }
            @media (max-width: 500px) {
                padding: 0 20px;
            }
        `

        const CounterRow = styled(Row)`
            margin-top: 100px;
            background-color: #000;
            padding: 100px 0;
            @media (max-width: 500px) {
                margin-top: 0;
            }

        `
        
        const AboutContainer = styled(Container)`
            padding: 100px 0;
            @media (max-width: 500px) {
                padding: 50px 0;
            }
        `

        const CounterComponent = styled.div`
            margin: 10px 0;
            text-align: center;
            @media (max-width:767px) {
                margin: 50px 0;
                text-align:center;
            }
            .value {
                font-size: 120px;
                font-family: Teko;
                color: #fff;
                line-height: 90px;
            }
            .text {
                font-size: 20px;
                color: #fff;
            }
            .symbol {
                color: #00F69B;
                position: absolute;
                font-size: 39px;
                top: -28px;
                @media (max-width: 500px) {
                    top: 0;
                }
            }

        `

        const LeftCol = styled(Col)`
            display: flex;
            align-items: baseline;
            justify-content: center;
            @media (max-width: 500px) {
                margin-bottom: 50px;
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
        const ImageContainer = styled.div`
            border-radius: 20px;
            overflow: hidden;
            animation: ${AnimatedShadow} 10s infinite alternate;
            @media (max-width: 767px) {
                margin-bottom: 50px;
            }
        `

        const Image = styled.img`
            max-width: 400px;
            @media (max-width: 767px) {
                max-width: 200px;
            }
            @media (max-width: 1400px) {
                max-width: 280px;
            }
        `

        const Separator = styled.div`
            height: 5px;
            width: 50px;
            background-color: #00F69B;
            margin-bottom: 20px;
        `

        const Heading = styled.h2`
            font-size: 40px;
            font-family: Montserrat;
            color: #fff;
            line-height: 50px;
            
            @media (max-width: 767px) {
                font-size: 24px;
            }
        `

        const Text = styled.p`
            font-size: 14px;
            font-weight: 300;
            color: #c5c5c5;
        `

        return(
            <Section id="about">
                <AboutContainer>
                    <Row>
                        <LeftCol md={6}>
                            <AnimationContainer animation="fadeIn">
                                <ImageContainer>
                                    <RevealContent delay={500}>
                                        <Image src={this.props.image.childImageSharp.fluid.src} alt="about" />
                                    </RevealContent>
                                </ImageContainer>
                            </AnimationContainer>
                        </LeftCol>
                        <Col md={6}>
                            <AnimationContainer animation="fadeIn">
                                <Heading>
                                    {this.state.isDeLanguage}
                                    {this.state.isDeLanguage ? 'Gründer des Teams' : 'Основатель команды'}
                                </Heading>
                                <Separator />
                                <Text>
                                    {this.state.isDeLanguage
                                        ? `Mein Name ist Rudolf Graf. Ich lebe in der Stadt Heilbronn. Ich investiere mein 
                                            Privatvermögen erfolgreich seit mehr als 4 Jahren und möchte Ihnen erzählen, 
                                            wie Sie es mir gleichtun und sogar noch besser machen können. Ich werde Ihnen 
                                            aufzeigen, wie Sie Ihr Einkommen steigern und materielle Probleme vergessen können, 
                                            damit Sie mehr Zeit für Ihre Träume und Hobbys, Familie, Freunde und Reisen haben. 
                                            Treten Sie meinem Graf-Team bei!`
                                        : `Меня зовут Рудольф Граф. Живу в Германии, в городе Хайльбонн. Я успешно инвестирую
                                            свои частные активы более 4-х лет и расскажу, как вы можете делать также и даже
                                            лучше. Я покажу вам, как увеличить свой доход, забыть о материальных проблемах,
                                            чтобы у вас было больше времени на ваши мечты и увлечения, семейные ценности, друзей
                                            и путешествия. Вступайте в мою команду Graf-Team!`
                                    }

                                </Text>
                                <TabsPart />
                            </AnimationContainer>
                        </Col>
                    </Row>
                </AboutContainer>
                <CounterRow>
                    <Container>
                        <Row>
                            <Col md={3}>
                                <AnimationContainer animation="fadeIn" delay={1000}>
                                    <CounterComponent>
                                        <Counter value={4} duration={5} delay={1000} text={this.state.isDeLanguage ? '4 Jahre Anlageerfahrung' : '4 года опыта инвестиций'} animation={true} />
                                    </CounterComponent>
                                </AnimationContainer>
                            </Col>
                            <Col md={3}>
                                <AnimationContainer animation="fadeIn" delay={1000}>
                                    <CounterComponent>
                                        <Counter value={1500} duration={5} delay={1000} symbol="+" text={this.state.isDeLanguage ? 'über 1500 Leute in einem Team' : 'свыше 1500 человек в команде'} animation={true} />
                                    </CounterComponent>
                                </AnimationContainer>
                            </Col>
                            <Col md={3}>
                                <AnimationContainer animation="fadeIn" delay={1000}>
                                    <CounterComponent>
                                        <Counter value={10} duration={5} delay={1000} symbol="+" text={this.state.isDeLanguage ? 'mehr als 10 profitable Online-Projekte' : 'более 10-ти доходных онлайн-проектов'} animation={true} />
                                    </CounterComponent>
                                </AnimationContainer>
                            </Col>
                            <Col md={3}>
                                <AnimationContainer animation="fadeIn" delay={1000}>
                                    <CounterComponent>
                                        <Counter value={100} duration={5} delay={1000} symbol="+" text={this.state.isDeLanguage ? 'mehr als 100.000 € / Jahr' : 'более €100k/год'} animation={true} />
                                    </CounterComponent>
                                </AnimationContainer>
                            </Col>
                        </Row>
                    </Container>
                </CounterRow>
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
        image: file(relativePath: {eq: "about-me.jpg"}) {
          childImageSharp {
            fluid(maxHeight: 2000) {
              src
            }
          }
        }
      }
      `}
      render={({ image }) => <AboutPersonal  image={image} {...props} />}
    />
  )