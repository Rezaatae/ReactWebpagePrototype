import React from 'react'
import {animateScroll as scroll} from 'react-scroll'
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa'
import {FooterContainer, FooterWrapper, FooterLinksContainer, FooterLinksWrapper,
FooterLinkItems, FooterLinkTitle, FooterLink, 
SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink} from './FooterElements'

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/home">Accessibility</FooterLink>
                            <FooterLink to="/home">Privacy Policy</FooterLink>
                            <FooterLink to="/home">Sitemap</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/home">Accessibility</FooterLink>
                            <FooterLink to="/home">Privacy Policy</FooterLink>
                            <FooterLink to="/home">Sitemap</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/home">Accessibility</FooterLink>
                            <FooterLink to="/home">Privacy Policy</FooterLink>
                            <FooterLink to="/home">Sitemap</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/home">Accessibility</FooterLink>
                            <FooterLink to="/home">Privacy Policy</FooterLink>
                            <FooterLink to="/home">Sitemap</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            dolla
                        </SocialLogo>
                        <WebsiteRights>
                            dolla © {new Date().getFullYear()} Jones and Palmer
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank"
                            aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank"
                            aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank"
                            aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank"
                            aria-label="Twitter">
                                <FaTwitter/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank"
                            aria-label="Linkedin">
                                <FaLinkedin/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer
