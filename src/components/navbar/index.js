import React from 'react'
import styled from 'styled-components'
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
var scrollToElement = require('scroll-to-element')

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          collapse: false,
          sticky: false,
          sections: this.props.sections ? this.props.sections : ['home', 'about', 'services', 'portfolio'],
          sectionNamesRu: ['Наверх', 'Основатель', 'Преимущества', 'Проекты'],
          sectionNamesDe: ['Nach oben', 'Gründer', 'Vorteile', 'Projekte'],
          languages: this.props.languages ? this.props.languages : ['ru', 'de'],
          languageNames: this.props.languageNames ? this.props.languageNames : ['Рус', 'De']
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, { passive: true })
        this.manageLanguages();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (window.pageYOffset >= 50 && this.state.sticky) {
            if (this.state.collapse !== nextState.collapse) {
                return true
            }
            return false
        } else {
            return true
        }
    }

    handleScroll = event => {
        if (window.pageYOffset >= 50) {
            this.setState({ sticky: true })
        } else {
            this.setState({ sticky: false })
        }
    }

    collapseNav() {
        console.log(this.state, 'col')
        if (!this.state.collapse) {
            this.setState({ collapse: true })
        } else {
            this.setState({ collapse: false })
        }
    }
    

    render() {

        const NavbarWrapper = styled.div`
            position: absolute;
            z-index: 1;
            width: 100%;
            padding: 20px 0;
            z-index: 100;
            &.sticky {
                position: fixed;
                background-color: rgba(0,0,0,.8);
                padding: 0 0;
                @media (max-width: 500px) {
                    padding: 20px 0;
                }
            }
        `

        const NavbarContainer = styled(Container)`
            display: flex;
            position: relative;
            @media (max-width: 500px) {
                display: block;
                padding: 0;
            }
            
        `

        const Nav = styled.nav`
            flex: 0 0 80%;
            max-width: 80%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            @media (max-width: 500px) {
                flex: 0 0 100%;
                max-width: 100%;
                justify-content: center;
                background-color: rgba(0,0,0,.8);
                margin-top: 20px;
                &.hidden_mobile {
                    display: none;
                }
            }
        `

        const LogoWrapper = styled.div`
            flex: 0 0 20%;
            max-width: 20%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin-right: 20px;
            @media (max-width: 500px) {
                flex: 0 0 100%;
                max-width: 100%;
                justify-content: center;
            }
        `

        const Logo = styled.img`
            height: 40px;
            @media (max-width: 1023px) {
                height: 30px;
            }
        `

        const NavInnerLeft = styled.div`
            justify-content: flex-start;
        `

        const NavInnerRight = styled.div`
            justify-content: flex-end;
        `

        const Toggler = styled.button`
            color: #fff;
            position: absolute;
            right: 0;
            top: 0;
            @media (min-width: 500px) {
                display: none;
            }
        `
        
        
        return(
            <NavbarWrapper className={`header${this.state.sticky === true ? ' sticky' : ''}`}>
                <NavbarContainer>
                    <LogoWrapper className="logo">
                        <Logo src="/img/logo.png" alt="logo" />
                    </LogoWrapper>
                    <Toggler
                        onClick={() => this.collapseNav()}
                        className="navbar-toggler navbar-toggler-right"
                    >
                        <FontAwesomeIcon icon={faBars} className="bars" />
                    </Toggler>
                    <Nav className={`navbar navbar-expand-sm ${this.state.collapse === true ? 'expand' : 'hidden_mobile'}`}>
                        <NavInnerLeft className={`navbar-collapse collapse ${this.state.collapse === true ? 'show' : ''}`}>
                            <div className="navbar-nav">{this.navItemsLeft()}</div>
                        </NavInnerLeft>
                        <NavInnerRight className={`navbar-collapse collapse ${this.state.collapse === true ? 'show' : ''}`}>
                            <div className="navbar-nav">{this.navItemsRight()}</div>
                        </NavInnerRight>
                    </Nav>
                </NavbarContainer>
            </NavbarWrapper>
        )
    }

    navigate(id) {
        if (this.props.scroll) {
            const el = document.getElementById(id)
            scrollToElement(el, {
                offset: 0,
                ease: 'in-out-expo',
                duration: 2000
            })
        } else {
            window.location.href = `./#${id}`;
        }
    }

    navItemsLeft() {
        const NavItem = styled.button`
            background: none;
            border: none;
            color: #fff;
            font-weight: 500;
            margin: 10px 5px;
            padding: 1px 6px;
            transition: .5s;
            &:hover {
                color: #00F69B;
            }
            &:focus {
                outline: none;
            }
            @media (min-width: 501px) and (max-width: 1023px) {
                font-size: 11px;
                margin: 2px;
            }

            &.active {
                color: #00F69B;
                cursor: default;
                pointer-events: none; 
            }
        `

        return this.state.languages.map((value, index) => {
            if (value === 'de') {
                console.log(this.state);
                return (
                    <NavItem key={index} className={`${this.state.isDeActive === true ? 'active' : ''}`} onClick={this.actionDe}>
                        {this.state.languageNames[index]}
                    </NavItem>
                )
            } else {
                return (
                    <NavItem key={index} className={`${this.state.isRuActive === true ? 'active' : ''}`} onClick={this.actionRu}>
                        {this.state.languageNames[index]}
                    </NavItem>
                )
            }
        })
    }

    navItemsRight() {
        const NavItem = styled.button`
            background: none;
            border: none;
            color: #fff;
            font-weight: 500;
            margin: 10px 5px;
            transition: .5s;
            &:hover {
                color: #00F69B;
            }
            &:focus {
                outline: none;
            }
            @media (min-width: 501px) and (max-width: 1023px) {
                font-size: 11px;
                margin: 2px;
            }
        `
        
        return this.state.sections.map((value, index) => {
            return (
                <NavItem key={index} onClick={() => this.navigate(value)}>
                    {this.state.isDeActive ? this.state.sectionNamesDe[index] : this.state.sectionNamesRu[index]}
                </NavItem>
            )
        })
    }

    manageLanguages() {
        var project;
        var origin = window.location.origin;
        var pathname = window.location.pathname;

        var isDeActive = pathname.includes('/de/');
        var isRuActive = !isDeActive;

        project = isDeActive ? pathname.slice(3) : pathname;

        this.setState({
            isDeActive: isDeActive,
            isRuActive: isRuActive
        });

        this.actionDe = function () {
            window.open(origin  + '/de' + project, '_self')
        };
        this.actionRu = function () {
            window.open(origin + project, '_self')
        };
    }
}

export default Navbar