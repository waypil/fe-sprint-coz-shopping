import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const HeaderContainer = styled.header`
  width: 100%;
  height: 80px;

  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.25);

  display: flex;
  justify-content: space-between;
  align-items: center;

  z-index: 1; // ToDoCard와 겹쳤을 때 그림자가 사라지는 버그 방지
`;

const Logo = styled.section`
  width: 350px;
  height: 100%;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoImage = styled.img`
  height: 40%;
  padding-right: 10px;
`;

const LogoText = styled.p`
  font-weight: 900;
  font-size: 30px;
`;

const MenuButton = styled.button`
  width: 10%;
  height: 100%;

  font-family: 'Arial';
  font-size: 10vh;
  color: white;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuIcon = styled(FontAwesomeIcon)`
  width: 25px;

  color: black;
`;

export default function Header(props) {
  return (
    <HeaderContainer>
      <Logo>
        <LogoImage
          src={require('../data/codestates-ci.png')}
          alt='코드스테이츠 로고'
        ></LogoImage>
        <LogoText>COZ Shopping</LogoText>
      </Logo>
      <MenuButton>
        <MenuIcon icon={faBars} /> {/* 三 */}
      </MenuButton>
    </HeaderContainer>
  );
}
