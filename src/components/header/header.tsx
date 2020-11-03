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
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={3}
        >
            <Slider>
                <Slide index={0}>
                    <SlideItem src={firstSlide} />
                </Slide>
                <Slide index={1}>
                    <SlideItem src={secondSlide} />
                </Slide>
                <Slide index={2}>
                    <SlideItem src={thirdSlide} />
                </Slide>
            </Slider>
            <Content>
                <div className="myContainer">
                    <Heading>Feel the Power of Typography</Heading>
                    <Items className='row'>
                        <HeaderItem className='col m4 s12' icon={firstIcon} text='Typography' background={theme.colors.red} opacity='1' />
                        <HeaderItem className='col m4 s12' icon={secondIcon} text='Responsive Web Design' background={theme.colors.blue} opacity='.8' />
                        <HeaderItem className='col m4 s12' icon={thirdIcon} text='UX Design' background={theme.colors.green} opacity='.8' />
                    </Items>
                </div>
            </Content>
        </StyledCarousel>
    )
}

export default Header