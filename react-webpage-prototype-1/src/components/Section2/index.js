import React from 'react'
import {Button} from '../ButtonElement'
import { Section2Container, Section2Wrapper, Section2Row,
    TextWrapper, Section2H2, Section2P, Section2Card1, BtnWrap } from './Section2Elements'
import img1 from '../../images/Image-2.jpg'
const Section2 = ({lightBg, id, imgStart, topLine,
lightText, headline, darkText, description, buttonLabel,
primary, dark, dark2}) => {
    return (
        <>
            <Section2Container lightBg={lightBg} id={id}><img src={img1} alt="" />
                <Section2Wrapper>
                    <Section2Row imgStart={imgStart}>
                        <Section2Card1>
                        <TextWrapper>
                        <Section2H2>new Header</Section2H2>
                        <Section2P>paragraph</Section2P>
                            <BtnWrap>
                                <Button to="home"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact={true}
                                offset={-80}
                                primary={primary ? 1 : 0}
                                dark={dark ? 1 : 0}
                                dark2={dark2 ? 1 : 0}
                                >{buttonLabel}</Button>
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
