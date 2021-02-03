import React from 'react'
import styled, { keyframes } from 'styled-components'


class ProgressBar extends React.Component {

    render() {
        const { text } = this.props

        const ProgressContainer = styled.div`
            margin-bottom: 25px;
        `
        const Text = styled.span`
            font-size: 17px;
            font-family: Montserrat;
            color: #fff;
        `

        const Value = styled.span`
            font-size: 17px;
            font-family: Montserrat;
            color: #fff;
            float: right;
        `
        const ColorAnimation = keyframes`
            0%  {background: #04E5E5;}
            12% {background: #00F69B;}
            25% {background: #5073B8;}
            37% {background: #04E5E5;}
            50% {background: #07B39B;}
            62% {background: #6FBA82;}
            75% {background: #5073B8;}
            87% {background: #1098AD;}
            100% {background: #00F69B;}
        `

        const Progress = styled.div`
            height: 5px;
            border-radius: 2.5px;
            margin-top: 10px;
            transition: 2s;
            animation: ${ColorAnimation} 10s infinite alternate;
        `


        return(
            <ProgressContainer>
                <Text>{text}</Text>
                <Value>{this.props.desc}</Value>
                <Progress style={{width: `${this.props.value}%`}}></Progress>
            </ProgressContainer>
        )
    }
}

export default ProgressBar