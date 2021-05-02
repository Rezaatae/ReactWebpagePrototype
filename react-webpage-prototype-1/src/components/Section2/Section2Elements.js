import styled from 'styled-components'

export const Section2Container = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '010606')};
    margin-top: 80px;

    @media screen and (max-width: 768px) {
        padding: 100px 0:
    }
`

export const Section2Wrapper = styled.div`
    display: flex;
    z-index: 1;
    height: 880px;
    width: 100%;
    max-width: 1100px;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`

export const Section2Row = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: centre;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`

export const Section2Card1 = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 1px;
    max-height: 340px;
    padding: 10rem 5rem;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`

export const TopLine = styled.p`
    color: #01bf71;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const Heading = styled.h1`
    //color: #000;
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({ lightText }) => (lightText ? '#f7f8fa' : '010606')};

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`


export const Section2H2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`

export const Section2P = styled.p`
    font-size: 1rem;
    text-align: center;
`
