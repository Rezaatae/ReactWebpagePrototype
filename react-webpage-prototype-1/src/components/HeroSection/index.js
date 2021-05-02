import React, {useState} from 'react'
import Video from '../../Videos/Video-1.mp4'
import { Button } from '../ButtonElement'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, 
HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }



    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'>
                </VideoBg>
            </HeroBg>
            <HeroContent>
                <HeroH1>Company Name</HeroH1>
                <HeroP>Eprae volorepudio bea cus magniste is dipsunt res pratur, nectur molorro vitaquo molore et eum con rem nonseque ium 
                    allcatem fuga.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='section1' onMouseEnter={onHover} 
                    onMouseLeave={onHover} smooth={true} 
                    duration={500} 
                    spy={true} 
                    exact='true' 
                    offset={-80}>
                        Read more {hover ? <ArrowForward /> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
