import React from 'react'
import CountUp from 'react-countup'
import handleViewport from 'react-in-viewport'
import styled, { keyframes, css } from 'styled-components'
class Counter_Component extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            start: false,
            inViewport: false,
            animation_complete: false
        }
    }

    componentDidUpdate() {
        if (this.state.inViewport !== this.props.inViewport && !this.state.animation_complete) {
            this.setState({inViewport: this.props.inViewport, value: this.props.state})
            setTimeout(() => { 
                this.setState({start: true, animation_complete: true})
            }
            , this.props.delay);
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.animation_complete) {
            return false
        } else {
            return true
        }
    }

    render() {
        const { value, symbol} = this.props

        const Animation = keyframes`
            0%  {color: #04E5E5;}
            12% {color: #00F69B;}
            25% {color: #5073B8;}
            37% {color: #04E5E5;}
            50% {color: #07B39B;}
            62% {color: #6FBA82;}
            75% {color: #5073B8;}
            87% {color: #1098AD;}
            100% {color: #00F69B;}
        `
        const Symbol = styled.span`
            animation: ${this.props.animation ? css`${Animation} 10s infinite alternate` : `none`};
        `

        const CounterContainer = styled.div`
        
        `
        
        return (
            <CounterContainer className="counter">
                <CountUp className="value" start={0} end={this.state.start === true ? value : 0} duration={this.props.duration ? this.props.duration : 1}/>
                <Symbol className="symbol">{symbol}</Symbol>
                {this.text()}
            </CounterContainer>
        )
        
    }

    text() {

        if (this.props.text) {
            const Text = styled.span`
        
            `
            return (
                <div>
                    <Text className="text">{this.props.text}</Text>
                </div>
            )
        }
    }
}

const Counter = handleViewport(Counter_Component);

export default Counter