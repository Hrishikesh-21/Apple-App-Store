import React from 'react'
import { FaFacebook, FaYoutube, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIconLink } from "./Footer";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">Apple</SocialLogo>
            <SocialIcons>
              <SocialIconLink  aria-label="Facebook" rel="noopener" noreferrer>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink  aria-label="Twitter" rel="noopener" noreferrer>
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink  aria-label="Instagram" rel="noopener" noreferrer>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink  aria-label="Youtube" rel="noopener" noreferrer>
                <FaYoutube />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;