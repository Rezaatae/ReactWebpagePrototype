import styled from 'styled-components'

export const Section1Container = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;

    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`

export const Section1Bg = styled.div`
    position: absolute;
    top: 800px;
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

export const Section1Wrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;
    z-index: 3;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const Section1Card1 = styled.div`
    background: #000;
    display: flex;
    margin-top: 180px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 1px;
    max-height: 340px;
    padding: 12rem 5rem;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    opacity: 0.7;
`

export const Section1Card2 = styled.div`
    background: #000;
    display: flex;
    margin-top: 180px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 1px;
    max-height: 340px;
    padding: 12rem 5rem;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    opacity: 0.7;
`

export const Section1Card3 = styled.div`
    background: #000;
    display: flex;
    margin-top: 180px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 1px;
    max-height: 340px;
    padding: 12rem 5rem;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    opacity: 0.7;
`

export const Section1Card4 = styled.div`
    background: #018f71;
    font-size: 20px;
    margin-left: 810px;
    margin-top: 15rem;
    display: block;
    border-radius: 1px;
    max-height: 340px;
    padding: 0.5rem 2rem;
    transition: all 0.2s ease-in-out;
    opacity: 0.9;
`

export const Section1H2 = styled.h2`
    color: #fff;
    font-size: 1rem;
    margin-top: -150px;
`

export const Section1P = styled.p`
    color: #fff;
    font-size: 1rem;
    margin-top: 50px;
`