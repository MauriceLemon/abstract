import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Col, Container } from 'react-bootstrap'
import styled from 'styled-components'
import PortfolioItem from 'sections/portfolio/parts/PortfolioItem.js'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import AnimatedHeading from 'components/animated-heading'
import AnimationContainer from 'components/animation-container'

class PortfolioThree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.manageLanguages();
    }
    
    render() {

        const Section = styled.section`
          background-color: #050505;
          padding: 100px 0;
        `
        const PortfolioContainer = styled.div`
            .slick-slide {
              display: block;
              margin: 0px 0 70px 0px;
            }
            .slick-dots {
              bottom: 0;
              li button:before,.slick-dots li.slick-active button:before {
                color: #00f69b;
              }
            }
          }
        `


        const settings = {
            dots: true,
            swipe: true,
            infinite: false,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: true,
            autoplay: false,
            autoplaySpeed: 10000,
            loop: true,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
        }
        
        return (
            <Section id="portfolio">
                  <Col md={12} style={{padding: 0}}>
                    <Container>
                      <AnimatedHeading text={this.state.isDeLanguage ? 'Wählen Sie ein Projekt' : 'Выберите проект'} />
                    </Container>
                    <PortfolioContainer>
                      <AnimationContainer animation="fadeIn">
                        <Slider {...settings}>
                          {this.portfolio()}
                        </Slider>
                      </AnimationContainer>
                    </PortfolioContainer>
                </Col>
            </Section>
        )
    }

    portfolio() {
      const { items } = this.props

      return items.map((value, index) => {
        return (
          <PortfolioItem
            key={index}
            index={index}
            image={value.content.frontmatter.image.childImageSharp.fluid.src}
            text={value.content.frontmatter.title}
            category={this.state.isDeLanguage ? value.content.frontmatter.categoryde : value.content.frontmatter.category}
            link={value.content.frontmatter.link}
            type="slider"
          />
        )
      })
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
              items: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(portfolio)/"}}, sort: {fields: [frontmatter___id], order: ASC}, limit: 9) {
                edges {
                  content: node {
                    frontmatter {
                      id
                      title
                      category
                      categoryde
                      link
                      image {
                        childImageSharp {
                          fluid(maxWidth: 3000) {
                            src
                          }
                        }
                      }
                    }
                  }
                }
              }
            }           
          `}
      render={({ items }) => <PortfolioThree items={items.edges} {...props} />}
  />
)