import styled from 'styled-components'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'

export const Section2Container = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '010606')};
    margin-top: 160px;

    @media screen and (max-width: 768px) {
        padding: 100px 0:
    }
`

export const Section2Bg = styled.div`
    position: absolute;
    top: 1767px;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const ImgBg = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`

export const Section2Wrapper = styled.div`
    display: block;
    z-index: 1;
    height: 880px;
    width: 100%;
    max-width: 1100px;
    margin-left: 0;
    justify-content: center;
`

export const Section2Row = styled.div`
    display: inline-block;
    z-index: 3;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: centre;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`

export const Section2Card1 = styled.div`
    background: #fff;
    display: inline-block;
    flex-direction: column;
    justify-content: flex-start;
    // align-items: center;
    left: 0;
    border-radius: 1px;
    max-height: 340px;
    padding: 20rem 20rem;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    z-index: 3;
    opacity: 0.9;
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 50px;
    padding-bottom: 60px;
    z-index: 4;
`

export const BtnWrap = styled.div`
    margin-top: 150px;
    display: flex;
    justify-content: flex-start;
`


export const Section2H2 = styled.h2`
    color: #000;
    font-size: 5rem;
    margin-top: -350px;
`

export const Section2P = styled.p`
    color: #000;
    font-size: 1rem;
    margin-top: 50px
`

export const LeftCard = styled.div`
    background: #018f71;
    font-size: 20px;
    margin: 0.5px 300px;
    display: block;
    border-radius: 1px;
    max-height: 340px;
    padding: 0.9rem 2rem;
    transition: all 0.2s ease-in-out;
    opacity: 0.9;
    z-index: 4;
`

export const RightCard = styled.div`
    background: #018f71;
    font-size: 20px;
    margin: 0.5px -290px;
    display: block;
    border-radius: 1px;
    max-height: 340px;
    padding: 0.9rem 2rem;
    transition: all 0.2s ease-in-out;
    opacity: 0.9;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 28px;
`

export const ArrowLeft = styled(MdKeyboardArrowLeft)`
    margin-left: 8px;
    font-size: 28px;
`
