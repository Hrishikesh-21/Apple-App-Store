import React, { useState } from 'react';
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from "./Hero";

const Hero = () => {
  const [ isOpen, setIsOpen ] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroContainer>
      <Navbar toggle={toggle}/>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <HeroContent>
        <HeroItems>
          <HeroH1>Store. The best way to buy the products you love.</HeroH1>
          {/* <HeroP>The latest. Take a look at what’s new right now.</HeroP> */}
          {/* <HeroBtn>The Apple Store difference. Even more reasons to shop with us.</HeroBtn> */}
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
