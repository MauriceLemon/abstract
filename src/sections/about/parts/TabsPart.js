import React from 'react'
import styled, { keyframes } from 'styled-components'
import Progress from 'components/progress'

class TabsPart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tab: "skills"
        }
    }

    componentDidMount() {
        this.manageLanguages();
    }

    render() {
        const TabContainer = styled.div`
            min-height: 400px;
            margin-top: 20px;
            @media (max-width:767px) {
                margin-top: 50px;
                padding: 0 20px;
            }
        `
        const TabSelectors = styled.div`
            display: flex;
        `
        
        const ColorAnimation = keyframes`
            0%  {border-color: #04E5E5;}
            12% {border-color: #00F69B;}
            25% {border-color: #5073B8;}
            37% {border-color: #04E5E5;}
            50% {border-color: #07B39B;}
            62% {border-color: #6FBA82;}
            75% {border-color: #5073B8;}
            87% {border-color: #1098AD;}
            100% {border-color: #00F69B;}
        `
        const TabSelector = styled.p`
            color: #fff;
            font-size: 20px;
            font-weight: bold;
            background-color: transparent;
            border: none;
            margin: 0 10px 0 0;
            border-bottom: 2px solid #fff;
            transition: .5s;
            &:hover, &.active {
                animation: ${ColorAnimation} 10s infinite alternate;
            }
            &:focus {
                outline: none;
            }
            @media (max-width: 767px) {
                font-size: 18px;
            }
        `

        const Tabs = styled.div`
            margin-top: 20px;
        `

        const Fade = keyframes`
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        `

        const Tab = styled.div`
            display: none;
            animation: ${Fade} 1s forwards;
        `

        return(
            <TabContainer>
                <TabSelectors>
                    <TabSelector className={this.state.tab === "skills" ? "active" : ""}>
                        {this.state.isDeLanguage ? 'Große Investitionsprojekte:' : 'Основные инвестиционные проекты:'}
                    </TabSelector>
                </TabSelectors>
                <Tabs>
                    <Tab style={{
                        display: this.state.tab === "skills" ? "block" : "none"
                    }}>
                        <Progress value={100} desc={''} text="Stellar Fund" />
                        <Progress value={50} desc={''} text="CROWD1" />
                        <Progress value={90} desc={''} text="SkyWay" />
                        <Progress value={60} desc={''} text="Finiko" />
                    </Tab>
                </Tabs>
            </TabContainer>
        )
    }

    manageLanguages() {
        var isDeLanguage = window.location.pathname.includes('/de/');

        this.setState({
            isDeLanguage: isDeLanguage
        });
    }
}

export default TabsPart