import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  height: 80px;

  color: gray;
  box-shadow: 0px -3px 5px rgba(0, 0, 0, 0.25);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  position: relative;  // z-index는 position이 static이면 동작 안 함
  z-index: 1; // MainContainer와 겹쳤을 때 그림자가 사라지는 버그 방지

  & * {
    margin: 0;
  }
`;

export default function Footer(props) {
  return (
    <FooterContainer>
      <p>개인정보 처리방침 | 이용 약관</p>
      <p>All rights reserved @ Codestates & Waypil</p>
    </FooterContainer>
  );
}
