import React from 'react'
import { Section1Container, Section1Bg, ImgBg, Section1Wrapper, Section1Card1, Section1Card2, Section1Card3,
Section1H2, Section1P} from './Section1Elements'
import img1 from '../../images/Image-2.jpg'
const Section1 = ({id}) => {
    return (
        
        <Section1Container id='section1'>
            <Section1Bg>
                <ImgBg src={img1} alt=""></ImgBg>
            </Section1Bg>
            <Section1Wrapper>
            <Section1Card1>
                    <Section1H2>Header1</Section1H2>
                    <Section1P>
                        <ul>
                        <li>Bullet 1</li>
                        <li>Bullet 2</li>
                        <li>Bullet 3</li>
                        </ul>
                    </Section1P>
                </Section1Card1>
                <Section1Card2>
                    <Section1H2>Header2</Section1H2>
                    <Section1P>
                        Si cum sequatiste 
                        porrovit estiorroEces 
                        ipsusa volorio cus prae 
                        mos volum ut ciuamus . 
                        Nam, esendae 1.aut arum 
                        rem rerum faccustotam 
                        quiantin nem.
                    </Section1P>
                </Section1Card2>
                <Section1Card3>
                    <Section1H2>Header3</Section1H2>
                    <Section1P>
                    <ul>
                        <li>Nam, esendae 1.aut arum 
                            rem rerum faccustotam 
                            quiantin nem
                            </li>
                        <li>Si cum sequatiste 
                            porrovit estiorroEces 
                            ipsusa volorio cus prae 
                            mos volum ut ciuamus .
                            </li>
                        <li>volorio cus prae 
                            mos volum ut ciuamus
                            </li>
                        </ul>
                    </Section1P>
                </Section1Card3>
            </Section1Wrapper>
        </Section1Container>
    )
}

export default Section1
