import React from 'react'
import {Button} from '../ButtonElement'
import { Section2Container, Section2Bg, ImgBg, Section2Wrapper, Section2Row,
    TextWrapper, Section2H2, Section2P, Section2Card1, BtnWrap } from './Section2Elements'
import img2 from '../../images/Image-3.jpg'
const Section2 = ({buttonLabel,
primary, dark, dark2}) => {
    return (
        <>
            <Section2Container id='section2'>
            <Section2Bg>
                <ImgBg src={img2} alt=""></ImgBg>
            </Section2Bg>
                <Section2Wrapper>
                    <Section2Row>
                        <Section2Card1>
                        <TextWrapper>
                        <Section2H2>Heading Level One</Section2H2>
                        <Section2P>Consequi dunt porum aut ipitae delit es re si od modiscia 
                                    quae quiam inum ea rum, quibusa sin perum et eum lab 
                                    illendamust. quas minctint. 
                                    Faciaestis si quamus. Ed utem invella volecabo. ltas sime 
                                    volest. suntotatem. Nam, sum quunt et officabo. Nequo 
                                    quas dolorer natemolo corest qui ut aut volut eos cone 
                                    la voluptatio officienes et es que omnis intin corum et, a 
                                    quis eaquibus.
                                </Section2P>
                            <BtnWrap>
                                <Button>Our Asset Portfolio</Button>
                            </BtnWrap>
                        </TextWrapper>
                        </Section2Card1>
                    </Section2Row>
                </Section2Wrapper>
            </Section2Container>
        </>
    )
}

export default Section2
