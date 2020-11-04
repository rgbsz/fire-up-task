import { Slide, Slider } from 'pure-react-carousel'
import React from 'react'
import firstIcon from '../../images/Icon1.png'
import secondIcon from '../../images/Icon2.png'
import thirdIcon from '../../images/Icon3.png'
import theme from '../../theme'
import HeaderItem from '../headerItem'
import firstSlide from '../../images/header_1.png'
import secondSlide from '../../images/header_2.png'
import thirdSlide from '../../images/header_3.png'
import { SlideItem, Heading, Items, StyledCarousel, Content } from './header.styles'

const Header: React.FC = (): JSX.Element => {
    return (
        <StyledCarousel 
            isPlaying={true}
            interval={4000}
            infinite={true}
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={3}
        >
            <Slider>
                <Slide index={0}>
                    <Heading>Feel the Power of Typography</Heading>
                    <SlideItem src={firstSlide} />
                </Slide>
                <Slide index={1}>
                  <Heading>Feel the Power of RWD</Heading>
                    <SlideItem src={secondSlide} />
                </Slide>
                <Slide index={2}>
                     <Heading>Feel the Power of UX Design</Heading>
                    <SlideItem src={thirdSlide} />
                </Slide>
            </Slider>
            <Content>
                <div className="myContainer">
                    <Items className='row'>
                        <HeaderItem className='col m4 s12' icon={firstIcon} text='Typography' background={theme.colors.red} opacity='1' alt='Letter icon'/>
                        <HeaderItem className='col m4 s12' icon={secondIcon} text='Responsive Web Design' background={theme.colors.blue} opacity='.8' alt='Magic wand icon'/>
                        <HeaderItem className='col m4 s12' icon={thirdIcon} text='UX Design' background={theme.colors.green} opacity='.8' alt='User icon'/>
                    </Items>
                </div>
            </Content>
        </StyledCarousel>
    )
}

export default Header