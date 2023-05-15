import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faGift, faStar } from '@fortawesome/free-solid-svg-icons';

const HeaderContainer = styled.header`
  width: 100%;
  height: 80px;

  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.25);

  display: flex;
  justify-content: space-between;
  align-items: center;

  z-index: 1; // MainContainer와 겹쳤을 때 그림자가 사라지는 버그 방지
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

const MenuContainer = styled.section`
  position: relative;

  width: 10%;
  height: 100%;
`;

const MenuButton = styled.button`
  width: 100%;
  height: 100%;

  font-family: 'Arial';
  font-size: 10vh;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuIcon = styled(FontAwesomeIcon)`
  width: 30px;
  height: 30px;

  color: black;
`;

const LNB = styled.aside`
  position: absolute;

  width: 200px;
  height: 150px;

  top: 70px;
  left: -100px;

  background-color: white;
  border-radius: 12px;
  box-shadow: 0px 0.4vh 0.8vh rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & > button {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > hr {
    width: 100%;
    color: lightgray;
  }
`;

export default function Header(props) {
  const [isLNBOpened, setIsLNBOpened] = React.useState(false);

  function openLNB(e) {
    setIsLNBOpened((prevBool) => !prevBool);
  }

  function closeLNB(e) {
    setIsLNBOpened((prevBool) => !prevBool);
  }
  const MiniIcon = styled(FontAwesomeIcon)`
    width: 20px;
    height: 20px;
    color: black;
  `;

  return (
    <HeaderContainer>
      <Logo>
        <LogoImage
          src={require('../data/codestates-ci.png')}
          alt='코드스테이츠 로고'
        ></LogoImage>
        <LogoText>COZ Shopping</LogoText>
      </Logo>
      <MenuContainer>
        {isLNBOpened ? (
          <LNB>
            <p>○○○님, 안녕하세요!</p>
            <hr />
            <button>
              <MiniIcon icon={faGift} />
              <p>상품리스트 페이지</p>
            </button>
            <hr />
            <button>
              <MiniIcon icon={faStar} />
              <p>상품리스트 페이지</p>
            </button>
          </LNB>
        ) : (
          <></>
        )}
        <MenuButton onClick={openLNB}>
          <MenuIcon icon={faBars} /> {/* 三 */}
        </MenuButton>
      </MenuContainer>
    </HeaderContainer>
  );
}
