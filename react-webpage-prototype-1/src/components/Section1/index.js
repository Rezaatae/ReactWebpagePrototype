import React from 'react'
import { Section1Container, Section1H1, Section1Wrapper, Section1Card1, Section1Card2, Section1Card3,
Section1H2, Section1P} from './Section1Elements'
import img1 from '../../images/Image-2.jpg'
const Section1 = ({id}) => {
    return (
        
        <Section1Container id={id}> <img src={img1} alt="" />
            <Section1H1>Header</Section1H1>
            <Section1Wrapper>
            <Section1Card1>
                    <Section1H2>new Header</Section1H2>
                    <Section1P>paragraph</Section1P>
                </Section1Card1>
                <Section1Card2>
                    <Section1H2>new Header</Section1H2>
                    <Section1P>paragraph</Section1P>
                </Section1Card2>
                <Section1Card3>
                    <Section1H2>new Header</Section1H2>
                    <Section1P>paragraph</Section1P>
                </Section1Card3>
            </Section1Wrapper>
        </Section1Container>
    )
}

export default Section1
